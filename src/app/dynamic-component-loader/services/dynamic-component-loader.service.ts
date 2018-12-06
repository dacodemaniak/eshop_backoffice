import { Injectable,
  Inject,
  Injector,
  NgModuleFactory,
  NgModuleFactoryLoader,
  ComponentFactory,
} from '@angular/core';

import { Observable, from as ObservableFromPromise, throwError as ObservableThrow } from 'rxjs';

import {
  DYNAMIC_COMPONENT,
  DYNAMIC_COMPONENT_MANIFESTS,
  DYNAMIC_MODULE,
  DynamicComponentManifest
} from '@app/dynamic-component-loader/interfaces/dynamic-component.manifest';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoaderService {

  constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests: DynamicComponentManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) { }

  public getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest = this.manifests
      .find(m => m.componentId === componentId);

      if (!manifest) {
        return ObservableThrow(`DynamicComponentLoader: Unknown componentId "${componentId}"`);
      }

    const path = manifest.loadChildren;

    const p = this.load<T>(path, componentId, injector);

    return ObservableFromPromise(p);
  }

  load<T>(path: string, componentId: string, injector?: Injector): Promise<ComponentFactory<T>> {
    return this.loader.load(path)
      .then((ngModuleFactory) => this.loadFactory<T>(ngModuleFactory, componentId, injector));
  }

  loadFactory<T>(ngModuleFactory: NgModuleFactory<any>, componentId: string, injector?: Injector): Promise<ComponentFactory<T>> {
    const moduleRef = ngModuleFactory.create(injector || this.injector);
    const dynamicComponentType = moduleRef.injector.get(DYNAMIC_COMPONENT, null);
    if (!dynamicComponentType) {
      const dynamicModule: DynamicComponentManifest = moduleRef.injector.get(DYNAMIC_MODULE, null);

      if (!dynamicModule) {
        throw new Error(
          'DynamicComponentLoader: Dynamic module for'
          + ` componentId "${componentId}" does not contain`
          + ' DYNAMIC_COMPONENT or DYNAMIC_MODULE as a provider.',
        );
      }
      if (dynamicModule.componentId !== componentId) {
        throw new Error(
          'DynamicComponentLoader: Dynamic module for'
          + `${componentId} does not match manifest.`,
        );
      }

      const path = dynamicModule.loadChildren;

      if (!path) {
        throw new Error(`${componentId} unknown!`);
      }

      return this.load<T>(path, componentId, injector);
    }

    return Promise.resolve(moduleRef.componentFactoryResolver.resolveComponentFactory<T>(dynamicComponentType));
  }
}

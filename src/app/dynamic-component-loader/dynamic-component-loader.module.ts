
import {
  NgModule,
  NgModuleFactoryLoader,
  ModuleWithProviders,
  SystemJsNgModuleLoader,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Type } from '@angular/core';

import { ROUTES } from '@angular/router';

import {
  DynamicComponentManifest,
  DYNAMIC_COMPONENT_MANIFESTS,
  DYNAMIC_COMPONENT,
  DYNAMIC_MODULE
} from '@app/dynamic-component-loader/interfaces/dynamic-component.manifest';

import { DynamicComponentLoaderService } from '@app/dynamic-component-loader/services/dynamic-component-loader.service';

@NgModule()

export class DynamicComponentLoaderModule {static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
  return {
    ngModule: DynamicComponentLoaderModule,
    providers: [
      DynamicComponentLoaderService,
      { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
      // provider for Angular CLI to analyze
      { provide: ROUTES, useValue: manifests, multi: true },
      // provider for DynamicComponentLoader to analyze
      { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests },
    ],
  };
}
static forModule(manifest: DynamicComponentManifest): ModuleWithProviders {
  return {
    ngModule: DynamicComponentLoaderModule,
    providers: [
      { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: manifest, multi: true },
      // provider for @angular/router to parse
      { provide: ROUTES, useValue: manifest, multi: true },
      // provider for DynamicComponentLoader to analyze
      { provide: DYNAMIC_MODULE, useValue: manifest }],
  };
}
static forChild(component: Type<any>): ModuleWithProviders {
  return {
    ngModule: DynamicComponentLoaderModule,
    providers: [
      { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: component, multi: true },
      // provider for @angular/router to parse
      { provide: ROUTES, useValue: [], multi: true },
      // provider for DynamicComponentLoader to analyze
      { provide: DYNAMIC_COMPONENT, useValue: component },
    ],
  };
}
}

export { DynamicComponentManifest } from '@app/dynamic-component-loader/interfaces/dynamic-component.manifest';

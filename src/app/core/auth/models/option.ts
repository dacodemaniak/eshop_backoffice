import { DeserializableInterface } from '@app/core/auth/interfaces/deserializable-interface';

export class Option implements DeserializableInterface {
  /**
   * Identifiant de l'option de menu
   * @var number
   */
  public id: number;

  /**
   * Idenfitiant de l'option <=> Nom du composant à charger
   * @var string
   */
  public slug: string;

  /**
   * Ordre de l'option du menu
   * @var number
   */
  public ordre: number;

  /**
   * Route à charger
   */
  public route: string;

  /**
   * Contenu de l'option de menu => titre, etc...
   */
  public content: any;

  /**
   * Sous-options associées à cette option de menu
   * @var Array<Option>
   */
  public nodes: Array<Option>;

  public getRoute(): string {
    const route: string =  this.route.substr(1, this.route.length);
    return route;
  }

  public deserialize(data: any) {
    Object.assign(this, data);
       /**
    console.log(data.nodes);

    if (data.hasOwnProperty('nodes')) {
      const options: any = data.nodes;

      if (options.length) {
        for (const option of options) {
          const optionObject = new Option();
          optionObject.deserialize(option);
          this.nodes.push(optionObject);
        }
      }

    }
    */
  }
}

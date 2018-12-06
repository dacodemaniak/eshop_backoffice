import { Option } from '@app/core/auth/models/option';
import { DeserializableInterface } from '@app/core/auth/interfaces/deserializable-interface';

export class Menu implements DeserializableInterface {
  /**
   * Identifiant du menu
   * @var number
   */
  public id: number;

  /**
   * Identifiant sous forme textuelle
   * @var string
   */
  public slug: string;

  /**
   * Région d'affichage du menu
   * @var string
   */
  public region: string;

  /**
   * Options du menu
   * @var Array<Option>
   */
  public options: Array<Option>;

  public deserialize(data: any) {
    Object.assign(this, data);

    if (data.hasOwnProperty('options')) {
      const options: Array<Option> = data.options;
      console.log('Options : ' + JSON.stringify(options));
      /**
      for (const option of options) {
        const optionObject = new Option();
        optionObject.deserialize(option);
        this.options.push(optionObject);
      }
      **/
    }
  }
}

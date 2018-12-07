/**
 * @name User Définition d'un utilisateur de l'application
 */
import { Menu } from '@app/core/auth/models/menu';
import { Option } from '@app/core/auth/models/option';

import { DeserializableInterface } from '@app/core/auth/interfaces/deserializable-interface';

export class User implements DeserializableInterface {
  /**
   * Identifiant de l'utilisateur
   * @var number
   */
  public id: number;

  /**
   * Login / Identifiant de l'utilisateur
   * @var string
   */
  public userName: string;

  /**
   * Prénom de l'utilisateur
   * @var string
   */
  public firstName: string;

  /**
   * Nom de l'utilisateur
   * @var string
   */
  public lastName: string;

  /**
   * Civilité
   * @var string
   */
  public civility?: string;

  /**
   * Adresse e-mail de l'utilisateur
   * @var string
   */
  public email: string;

  /**
   * Numéro de téléphone
   * @var string
   */
  public phone?: string;

  /**
   * Jeton JWT de l'utilisateur après authentification
   * @var string
   */
  public token?: string;

  /**
   * Groupe d'appartenance de l'utilisateur
   * @var string
   */
  public group: string;

  /**
   * Menus disponibles pour l'utilisateur
   * @var Array<Menu>
   */
  public menus?: Array<Menu>;

  /**
   * Retourne le menu principal associé à l'utilisateur courant
   * @return Array<Option> | Array<any>
   */
  public getMainMenuOptions(): Array<Option> | Array<any> {
    const index: number = this.menus.findIndex((obj) => obj.region == '_main' );
    if (index !== -1) {
      return this.menus[index].options;
    }
    return [];
  }

  public deserialize(data: any) {
    Object.assign(this, data);
  }

}

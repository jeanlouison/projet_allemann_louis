import { Adresse } from '../models/adresse';

export class AddAddress {
  static readonly type = '[Adresse] Add Address';

  constructor(public payload: Adresse) {
  }
}

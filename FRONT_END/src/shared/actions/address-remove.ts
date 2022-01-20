import { Adresse } from '../models/adresse';

export class RemoveAddress{
  static readonly type = '[Adresse] Remove Address';

  constructor(public payload: Adresse) {}
}

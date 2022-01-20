import { Produit } from '../models/produit';

export class RemoveProduct {
  static readonly type = '[Produit] Remove Product';

  constructor(public payload: Produit) {}
}

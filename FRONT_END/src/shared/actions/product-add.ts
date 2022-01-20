import { Produit } from '../models/produit';

export class AddProduct {
  static readonly type = '[Produit] Add Product';

  constructor(public payload: Produit) {}
}

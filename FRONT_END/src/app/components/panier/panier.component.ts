import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EmptyCart } from 'src/shared/actions/cart-empty';
import { RemoveProduct } from 'src/shared/actions/product-remove';
import { Produit } from 'src/shared/models/produit';
import { ProductState } from 'src/shared/states/products-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  @Select(ProductState.getListeProduits)
  products$!: Observable<Produit[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  removeProduct(product: Produit) {
    this.store.dispatch(new RemoveProduct(product));
  }

  emptyCart() {
    this.store.dispatch(new EmptyCart());
  }

}

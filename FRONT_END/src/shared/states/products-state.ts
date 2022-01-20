import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { EmptyCart } from '../actions/cart-empty';
import { AddProduct } from '../actions/product-add';
import { RemoveProduct } from '../actions/product-remove';
import { ProductsStateModel } from './products-state-model';

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})

@Injectable()
export class ProductState {

  @Selector()
  static getNbProduits(state: ProductsStateModel) {
    return state.products.length;
  }

  @Selector()
  static getListeProduits(state: ProductsStateModel) {
    return state.products;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: AddProduct
  ){
    const state = getState();
    console.log(payload);
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(RemoveProduct)
  remove(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: RemoveProduct
  ){
    const state = getState();
    patchState({
      products: state.products.filter(p => p != payload)
    });
  }

  @Action(EmptyCart)
  empty(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { }: EmptyCart
  ){
    const state = getState();
    patchState({
      products: []
    });
  }
}

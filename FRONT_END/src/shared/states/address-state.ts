import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddAddress } from '../actions/address-add';
import { RemoveAddress } from '../actions/address-remove';
import { AddressStateModel } from './address-state-model';

@State<AddressStateModel>({
  name: 'address',
  defaults: {
    addresses: [],
  },
})

@Injectable()
export class AddressState {

  @Selector()
  static getListeAdresses(state: AddressStateModel) {
    return state.addresses;
  }

  @Action(AddAddress)
  add(
    { getState, patchState }: StateContext<AddressStateModel>,
    { payload }: AddAddress
  ){
    const state = getState();
    console.log('salut');
    console.log(payload);
    patchState({
      addresses: [...state.addresses, payload],
    });
  }

  @Action(RemoveAddress)
  remove(
    { getState, patchState }: StateContext<AddressStateModel>,
    { payload }: RemoveAddress
  ){
    const state = getState();
    patchState({
      addresses: state.addresses.filter(a => a != payload)
    });
  }
}

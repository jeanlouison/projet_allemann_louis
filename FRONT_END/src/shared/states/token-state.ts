import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetToken } from '../actions/token-set';
import { Token } from '../models/token';
import { TokenStateModel } from './token-state-model';

@State<TokenStateModel>({
  name: 'token',
  defaults: {
    token: new Token(),
  },
})

@Injectable()
export class TokenState {

  @Selector()
  static getAuthenticatedUser(state: TokenStateModel) {
    console.log(state.token);
    return state.token;
  }

  @Action(SetToken)
  add(
    { getState, patchState }: StateContext<TokenStateModel>,
    { payload }: SetToken
  ){
    const state = getState();
    patchState({
      token: payload
    });
  }
}

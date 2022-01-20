import { Token } from '../models/token';

export class SetToken {
  static readonly type = '[Token] Add Token';

  constructor(public payload: Token) {
    console.log(payload);
  }
}
export class Adresse {
  adresse: string = '';
  codePostal: string = '';
  ville: string = '';

  public constructor(init?: Partial<Adresse>) {
    Object.assign(this, init);
  }
}

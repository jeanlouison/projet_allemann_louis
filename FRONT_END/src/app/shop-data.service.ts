import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  urlApiProduct: string = '/api/products';

  constructor(private httpClient: HttpClient) { }

  public getCatalogue(): Observable<Array<Produit>> {
    return this.httpClient.get<Array<Produit>>(this.urlApiProduct);
  }

  public async getMaxPrice(): Promise<number> {
    let produitsArray: Array<Produit> = new Array<Produit>();
    let produitsObs : Observable<Array<Produit>> = this.httpClient.get<Array<Produit>>(this.urlApiProduct);

    return new Promise((resolve, reject) => {
      produitsObs
      .subscribe(produits => {
        produitsArray = produits as Array<Produit>;
        resolve(Math.ceil(Math.max.apply(Math, produitsArray.map(produit => produit.prix ))));
      }), reject});
  }

  public async getProductByRef(ref: string): Promise<Produit> {
    let produitsArray: Array<Produit> = new Array<Produit>();
    let produitsObs : Observable<Array<Produit>> = this.httpClient.get<Array<Produit>>(this.urlApiProduct);

    return new Promise((resolve, reject) => {
      produitsObs
      .subscribe(produits => {
        produitsArray = produits as Array<Produit>;
        produitsArray = produitsArray.filter(produit => produit.ref == ref);
        resolve(produitsArray[0]);
      }), reject});
  }
}

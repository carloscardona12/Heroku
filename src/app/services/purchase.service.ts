import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../models/purchase';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  selectedPurchase: Purchase;
  purchases: Purchase[];


  readonly URL_API = '/api/purchases'


  constructor(public http: HttpClient) {
    this.selectedPurchase = new Purchase();
   }

  getPurchases(){
    return this.http.get(this.URL_API)
  }

  postPurchase(Purchase: Purchase){
    return this.http.post(this.URL_API, Purchase)
  }

  putPurchase(purchase: Purchase){
    return this.http.put(this.URL_API + `/${purchase._id}`, purchase)
  }

  deletePurchase(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }



}

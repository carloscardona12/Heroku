import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Discount } from '../models/discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  selectedDiscount: Discount;
  discounts:Discount[];
  //local
  //readonly URL_API = 'http://localhost:3000/api/discounts'
  //heroku
  readonly URL_API = '/api/discounts'
  
  constructor(public http: HttpClient) {
    this.selectedDiscount = new Discount();
   }

  getDiscounts(){
    return this.http.get(this.URL_API)
  }

  postDiscount(Discount: Discount){
    return this.http.post(this.URL_API, Discount)
  }

  putDiscount(discount: Discount){
    return this.http.put(this.URL_API + `/${discount._id}`, discount)
  }

  deleteDiscount(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}

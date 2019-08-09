import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  selectedPromotion: Promotion;
  promotions:Promotion[];
  
  //local
  //readonly URL_API = 'http://localhost:3000/api/promotions'
  //heroku
  readonly URL_API = '/api/promotions'

  constructor(public http: HttpClient) {
    this.selectedPromotion= new Promotion();
   }

   getPromotions(){
     return this.http.get(this.URL_API);
   }

   postPromotion(Promotion: Promotion){
     return this.http.post(this.URL_API, Promotion);
   }

   putPromotion(promotion: Promotion){
     return this.http.put(this.URL_API + `/${promotion._id}`,promotion);
   }

   deletePromotion(_id: string){
     return this.http.delete(this.URL_API+ `/${_id}`);
   }
}

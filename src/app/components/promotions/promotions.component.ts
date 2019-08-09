import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';
import { NgForm } from '@angular/forms';
import { Promotion } from 'src/app/models/promotion';

declare var M:any;

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
  providers: [PromotionService]
})
export class PromotionsComponent implements OnInit {

  constructor(public promotionService: PromotionService) { }

  ngOnInit() {
    this.getPromotions();
  }


  addPromotion(form: NgForm){
    if(form.value._id){
      this.promotionService.putPromotion(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html:'Update Successfull'});
        this.getPromotions();
      })
    }else{
      this.promotionService.postPromotion(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html:'Saved Successfull'})
        this.getPromotions();

      });
    }
  }

  getPromotions(){
    this.promotionService.getPromotions()
    .subscribe (res =>{
      this.promotionService.promotions = res as Promotion[];
      console.log(res);
    })
  }

  editPromotion(promotion: Promotion){
    this.promotionService.selectedPromotion = promotion;
  }


  deletePromotion(_id: string){
    if (confirm('Are you sure wante you delete')){
      this.promotionService.deletePromotion(_id)
      .subscribe(res=>{
        this.getPromotions();
        M.toast({html: 'Delete Successfully'})
      })
    }
  }


  resetForm(Form?: NgForm){
    if (Form){
      Form.reset();
      this.promotionService.selectedPromotion = new Promotion();
    }
  }

}

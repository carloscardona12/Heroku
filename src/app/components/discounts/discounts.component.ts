import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/models/discount';
import { NgForm } from '@angular/forms';
import { DiscountService } from 'src/app/services/discount.service';


declare var M:any;

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css'],
  providers: [DiscountService]
})
export class DiscountsComponent implements OnInit {

  constructor(public discountService: DiscountService) { }

  ngOnInit() {
    this.getDiscounts();
  }

  /*Darle datos al servidor */

  addDiscount(form: NgForm){
    console.log(form)
    if(form.value._id){
      this.discountService.putDiscount(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html:'Update successfull'});
        this.getDiscounts();
      })
    }else {
      this.discountService.postDiscount(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Save successfull'})
        this.getDiscounts();
      });
    }
  }


  getDiscounts(){
    this.discountService.getDiscounts()
    .subscribe (res => {
      this.discountService.discounts = res as Discount[];
      console.log(res);
    });
  }

  editDiscount(discount: Discount){
    this.discountService.selectedDiscount = discount;
  }

  deleteDiscount(_id: string){
    if (confirm('Are you sure tou wante yo delete')){
      this.discountService.deleteDiscount(_id)
      .subscribe(res =>{
        this.getDiscounts();
        M.toast({html: 'Delete successfully'});
      });
    }
  }

  resetForm(Form?: NgForm){
    if (Form){
      Form.reset();
      this.discountService.selectedDiscount= new Discount();
    }
  }

}

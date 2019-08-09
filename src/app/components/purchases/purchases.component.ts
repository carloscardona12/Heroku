import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { NgForm } from '@angular/forms';
import { Purchase } from 'src/app/models/purchase';


declare var M: any;

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor(public purchaseService: PurchaseService) { }

  ngOnInit() {
    this.getPurchases();
  }

  addPurchase(form: NgForm){
    if(form.value._id){
    this.purchaseService.putPurchase(form.value)
    .subscribe (res =>{
      this.resetForm(form);
      M.toast({html:'Update succefull'});
      this.getPurchases();
    })
  } else{
    this.purchaseService.postPurchase(form.value)
    .subscribe( res => {
    this.resetForm(form);
    M.toast({html: 'save Successfully'})
    this.getPurchases();
  }); 
  }    
}

  getPurchases(){
      this.purchaseService.getPurchases()
      .subscribe (res =>{
        this.purchaseService.purchases = res as Purchase [];
        console.log(res);
      });

  }

  editPurchase(purchase: Purchase){
    this.purchaseService.selectedPurchase = purchase;
  }

  deletePurchase(_id: string){
    if(confirm('Are you want to delete it?')){
      this.purchaseService.deletePurchase(_id)
    .subscribe( res =>{
      this.getPurchases();
      M.toast({html: 'Delete successfully'});
    });
  }
  }


  resetForm(Form?: NgForm){
    if(Form){
      Form.reset();
      this.purchaseService.selectedPurchase = new Purchase();
    }

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from '../app.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { PurchasesComponent } from '../components/purchases/purchases.component';
import { DiscountsComponent } from '../components/discounts/discounts.component';
import { ClientsComponent } from '../components/clients/clients.component';
import {PromotionsComponent} from '../components/promotions/promotions.component';



const routes: Routes = [
  {path:'home', component: AppComponent},
  {path: 'employee', component: EmployeesComponent},
  {path: 'purchase', component: PurchasesComponent},
  {path: 'discount', component: DiscountsComponent},
  {path: 'client', component: ClientsComponent},
  {path: 'promotion', component: PromotionsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class RouteModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from "@angular/forms"; 
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { DiscountsComponent } from './components/discounts/discounts.component';

import {RouteModule} from './route/route.module';
import { ClientsComponent } from './components/clients/clients.component';
import { PromotionsComponent } from './components/promotions/promotions.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    PurchasesComponent,
    DiscountsComponent,
    ClientsComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

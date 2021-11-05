import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from "./customer-routing.module";
import { ProductAccountCustomerComponent } from './product-account-customer/product-account-customer.component';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ProductAccountCustomerComponent
  ],
  exports: [
    ProductAccountCustomerComponent
  ]
})
export class CustomerModule { }

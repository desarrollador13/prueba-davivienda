import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAccountCustomerComponent } from 'src/app/components/customer/product-account-customer/product-account-customer.component';

const routes: Routes = [    
    {
        path: 'cliente',
        component: ProductAccountCustomerComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from 'src/app/components/pantalla-principal/pantalla-principal.component';
import { ProductAccountCustomerComponent } from 'src/app/components/customer/product-account-customer/product-account-customer.component'

const routes: Routes = [
    {
      path: '',
      component: PantallaPrincipalComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
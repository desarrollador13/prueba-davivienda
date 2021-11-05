import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from 'src/app/services/interceptor/HttpInterceptor-service';
//import { ProductAccountCustomerComponent } from './components/customer/product-account-customer/product-account-customer.component';
//import { HeaderComponent } from './components/headers/header/header.component';
//import { RouterModule } from '@angular/router';
//HTTP_INTERCEPTORS
import { ComponentesModule } from 'src/app/components/componentes.module';
import { PantallaPrincipalComponent } from 'src/app/components/pantalla-principal/pantalla-principal.component';
import { AppRoutes } from './app.route';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentesModule,
    AppRoutes,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

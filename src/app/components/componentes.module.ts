import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PantallaPrincipalComponent } from "./pantalla-principal/pantalla-principal.component";
import { RoutingModule } from "./routing.module";
import { HeaderComponent } from 'src/app/components/headers/header/header.component';


@NgModule({
    imports: [
      CommonModule,
      RoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
      PantallaPrincipalComponent,
      HeaderComponent,
    ],
    exports: [
      PantallaPrincipalComponent,
      HeaderComponent,
    ],
    providers: [

    ]
  })

export class ComponentesModule {
}
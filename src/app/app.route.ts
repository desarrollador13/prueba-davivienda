import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
//import { AppComponent } from "./app.component"
import { NotFoundComponent} from 'src/app/components/not-found/not-found.component'

export const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent,
    },
    {
        path: 'home',
        loadChildren: () => import('./components/componentes.module').then((m)=>{
                return m.ComponentesModule
            }).catch( err => console.log('Oh no!', err) ),
    },
    {
        path: 'davivienda',
        loadChildren: () => import('./components/customer/customer.module').then((m)=>{
                return m.CustomerModule
            }).catch( err => console.log('Oh no!', err) ),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutes { }

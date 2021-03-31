import { RegisterComponent } from './../Components/register/register.component';
import { DrawerComponent } from '../Components/drawer/drawer.component';
import { DatatableComponent } from '../Components/datatable/datatable.component';
import { CardComponent } from '../Components/card/card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Defining Path for routing
const routes: Routes = [
  { path: 'card' , component: CardComponent},
  { path: 'datatable' , component: DatatableComponent},
  { path: 'reactiveform' , component: RegisterComponent},
  { path: '' , redirectTo: 'card', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { RegisterComponent } from './Components/register/register.component';
import { AppRoutingModule } from './Modules/app-routing.module';
import { DatatableComponent } from './Components/datatable/datatable.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './Modules/material.module';
import { DrawerComponent } from './Components/drawer/drawer.component';
import { CardComponent } from './Components/card/card.component';
import { ApiCallService } from '../services/apiCall.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountriesService } from 'src/services/countries.service';


@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    CardComponent,
    DatatableComponent,
    RegisterComponent
   ],
  imports: [
    /*Adding Material Module here to bootstrap it in the app */
    MaterialModule,
    BrowserModule,
    /*Adding AppRoute Module here to provide routing functionality in the app */
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
     /*Adding HttpClientModule Module here to call api in service*/
    HttpClientModule
  ],
  exports: [
    CardComponent,
    DrawerComponent
  ],
  providers: [ApiCallService, CountriesService],
  bootstrap: [AppComponent]
  /* Services will be added in providers for specific component if
  we want to access in any component then injectible root is good option which comes with angular 11 */
})
export class AppModule { }

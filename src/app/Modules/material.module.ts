import {NgModule} from '@angular/core';
import {MdcMenuModule} from '@angular-mdc/web/menu';
import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';
import {MdcIconModule} from '@angular-mdc/web/icon';
import {MdcIconButtonModule} from '@angular-mdc/web/icon-button';
import {MdcRippleModule} from '@angular-mdc/web/ripple';
import {MdcButtonModule} from '@angular-mdc/web/button';
import {MdcCardModule} from '@angular-mdc/web/card';
import {MDCDataTableModule} from '@angular-mdc/web/data-table';
import {MdcListModule} from '@angular-mdc/web/list';
import {MdcDrawerModule} from '@angular-mdc/web/drawer';

// Here All necessary modules are added like menu topappbar ripple, button, card, datatable etc

@NgModule({
  exports: [
    MdcIconModule,
    MdcIconButtonModule,
    MdcMenuModule,
    MdcDrawerModule,
    MdcListModule,
    MdcTopAppBarModule,
    MdcRippleModule,
    MdcButtonModule,
    MdcCardModule,
    MDCDataTableModule
  ]
})

export class MaterialModule {}

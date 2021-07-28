import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AvisComponent} from './component/avis/avis.component'
import {Bloc_colleguesComponent} from './component/bloc_collegues/bloc_collegues.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {listStaffComponent} from "./component/list_staff/list-staff.component";

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    Bloc_colleguesComponent,
    listStaffComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

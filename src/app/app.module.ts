import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AvisComponent} from './component/avis/avis.component'
import {Bloc_colleguesComponent} from './component/bloc_collegues/bloc_collegues.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {listStaffComponent} from "./component/list_staff/list-staff.component";

import {HttpClientModule} from "@angular/common/http";
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import {CollegueFormComponent} from "./component/CollegueTemplateForm/CollegueTemplateForm.component";

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    Bloc_colleguesComponent,
    listStaffComponent,
    NomPrenomValidatorDirective,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

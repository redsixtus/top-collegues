import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CollegueFormComponent} from './CollegueTemplateForm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {NomPrenomValidatorDirective} from "../../validators/nom-prenom-validator.directive";



@NgModule({
  declarations: [
    CollegueFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [CollegueFormComponent]
})


export class AppModule { }

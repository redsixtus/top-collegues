import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, NgbdCarouselBasic} from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdCarouselBasic],
  exports: [NgbdCarouselBasic],
  bootstrap: [NgbdCarouselBasic]
})
export class NgbdCarouselBasicModule {}
export class AppModule { }

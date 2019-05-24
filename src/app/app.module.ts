import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgexampleComponent } from './svgexample/svgexample.component';
import { TimingDemoComponent } from './timing-demo/timing-demo.component';
import { Component1Component } from './timing-demo/component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgexampleComponent,
    TimingDemoComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

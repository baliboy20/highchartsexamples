import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {Chart1Module} from './chart1/chart1.module';
import {ChartsModule} from './charts/charts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      // Chart1Module,
      ChartsModule,
      RouterModule.forRoot([{path: '', redirectTo: 'charts', pathMatch: 'full'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadComponent } from './load/load.component';
import { HomeComponent } from './home/home.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PopupComponent } from './popup/popup.component';
import { ValidateComponent } from './validate/validate.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular'; 


@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    HomeComponent,
    MultiSelectComponent,
    PopupComponent,
    ValidateComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.with
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

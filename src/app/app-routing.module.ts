import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { HomeComponent } from './home/home.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'load', component: LoadComponent },
  { path: 'select', component: MultiSelectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

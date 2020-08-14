import { StoreFormComponent } from './store-form/store-form.component';
import { StoreListComponent } from './store-list/store-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path : '', component : StoreListComponent },
  { path : ':id', component : StoreFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }

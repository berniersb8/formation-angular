import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path : '', component : BeerListComponent },
  { path : ':id', component : BeerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }

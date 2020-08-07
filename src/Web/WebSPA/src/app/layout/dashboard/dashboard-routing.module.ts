import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    children : [
      { path : 'beer', loadChildren: () => import('./content/beer/beer.module').then(m => m.BeerModule) },
      { path : 'store', loadChildren: () => import('./content/store/store.module').then(m => m.StoreModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

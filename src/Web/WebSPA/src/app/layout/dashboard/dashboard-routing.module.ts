import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    children : [
      { path: '', redirectTo: 'beers', pathMatch: 'full' },
      { path: 'beers', loadChildren: () => import('./content/beer/beer.module').then(m => m.BeerModule) },
      { path: 'stores', loadChildren: () => import('./content/store/store.module').then(m => m.StoreModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

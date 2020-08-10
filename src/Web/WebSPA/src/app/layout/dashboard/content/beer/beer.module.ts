import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerRoutingModule } from './beer-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BeerService } from 'src/app/service/beer.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    BeerRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule
  ],
  declarations: [BeerListComponent, BeerFormComponent],
  providers: [BeerService]
})
export class BeerModule { }

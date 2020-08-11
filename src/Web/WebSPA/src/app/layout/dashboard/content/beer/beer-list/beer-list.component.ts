import { BeerModel } from './../../../../../model/beer.model';
import { BeerService } from './../../../../../service/beer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BeerFormComponent } from '../beer-form/beer-form.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {
  public showLoading: boolean = false;
  public displayedColumns: string[] = ['id', 'name', 'description'];
  public dataSource = new MatTableDataSource<BeerModel>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private beerService: BeerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshBeerTable();
  }

  public refreshBeerTable(): void {
    this.showLoading = true;
    setTimeout(() => {
      this.beerService.getList().subscribe(beers => {
        this.dataSource = new MatTableDataSource<BeerModel>(beers);
        this.dataSource.paginator = this.paginator;
      }, () => this.showLoading = false, () => this.showLoading = false);
    }, 1000);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(BeerFormComponent, {
      width: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

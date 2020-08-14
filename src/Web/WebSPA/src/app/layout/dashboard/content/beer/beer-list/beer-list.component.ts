import { ConfirmDialogComponent } from './../../../../../shared/component/confirm-dialog/confirm-dialog.component';
import { BeerModel } from './../../../../../model/beer.model';
import { BeerService } from './../../../../../service/beer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BeerFormComponent } from '../beer-form/beer-form.component';
import { ConfirmDialogModel } from 'src/app/shared/component/confirm-dialog/confirm-dialog.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {
  public showLoading: boolean = false;
  public displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  public dataSource = new MatTableDataSource<BeerModel>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private beerService: BeerService, public dialog: MatDialog) { }

  public ngOnInit(): void {
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

  public openFormDialog(beer: BeerModel = null): void {
    const dialogRef = this.dialog.open(BeerFormComponent, {
      width: '400px',
      disableClose: true,
      data: beer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'cancel') {
        this.refreshBeerTable();
      }
    });
  }

  public openConfirmDeletedialog(id: number): void {
    const confirmDialogModel: ConfirmDialogModel = {
      title: 'Confirmation',
      message: 'Êtes-vous sûre de vouloir supprimer cette bière?'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      disableClose: true,
      data: confirmDialogModel
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.beerService.delete(id).subscribe(() => this.refreshBeerTable());
      }
    });
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeerModel, getDefaultBeerModel } from 'src/app/model/beer.model';
import { BeerService } from 'src/app/service/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
})
export class BeerFormComponent implements OnInit {
  public showLoading: boolean = false;
  public beer: BeerModel = getDefaultBeerModel();

  constructor(
    private beerService: BeerService,
    public dialogRef: MatDialogRef<BeerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BeerModel
  ) {
    if (data !== null) {
      this.beer = data;
    }
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    this.showLoading = true;
    this.beerService.save(this.beer).subscribe(() => {
      this.showLoading = false;
      this.dialogRef.close();
    }, () => this.showLoading = false);
  }
}

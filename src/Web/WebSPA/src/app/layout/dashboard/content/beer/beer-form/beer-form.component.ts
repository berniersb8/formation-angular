import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeerModel, getDefaultBeerModel } from 'src/app/model/beer.model';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
})
export class BeerFormComponent implements OnInit {
  public showLoading: boolean = false;
  public beer: BeerModel = getDefaultBeerModel();

  constructor(
    public dialogRef: MatDialogRef<BeerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BeerModel
  ) {
    if (data !== null) {
      this.beer = data;
    }
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    console.log();
  }
}

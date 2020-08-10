import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../model/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(public http: HttpClient) { }

  public getList(): Observable<BeerModel[]> {
    return this.http.get<BeerModel[]>(`${environment.apiDomainV1}beers`);
  }

}

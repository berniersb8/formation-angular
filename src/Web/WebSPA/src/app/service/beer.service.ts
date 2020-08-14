import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../model/beer.model';

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<BeerModel[]> {
    return this.http.get<BeerModel[]>(`${environment.apiDomainV1}beers`);
  }

  public save(beer: BeerModel): Observable<any> {
    return this.http.post(`${environment.apiDomainV1}beers`, beer);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiDomainV1}beers/${id}`);
  }
}

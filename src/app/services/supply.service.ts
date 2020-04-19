import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SupplyModel} from '../objects/supply.model';
import {NewSupplyModel} from '../objects/newSupply.model';

@Injectable({
  providedIn: 'root',
})
export class SupplyService {
  private url = 'http://localhost:8080/api/supply';

  constructor(private httpClient: HttpClient) {}

  getSupplies(): Observable<SupplyModel[]> {
    return this.httpClient.get<SupplyModel[]>(this.url);
  }

  createSupply(supply: NewSupplyModel): Observable<SupplyModel> {
    return this.httpClient.post<SupplyModel>(this.url, supply);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PriceHistoryModel} from '../objects/priceHistory.model';
import {NewPriceHistoryModel} from '../objects/newPriceHistory.model';

@Injectable({
  providedIn: 'root',
})
export class PriceHistoryService {
  private url = 'http://localhost:8080/api/price-history';

  constructor(private httpClient: HttpClient) {}

  getPricesHistory(): Observable<PriceHistoryModel[]> {
    return this.httpClient.get<PriceHistoryModel[]>(this.url);
  }

  createPriceHistory(newPriceHistory: NewPriceHistoryModel): Observable<PriceHistoryModel> {
    return this.httpClient.post<PriceHistoryModel>(this.url, newPriceHistory);
  }
}

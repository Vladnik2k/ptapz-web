import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DetailModel} from '../objects/detail.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private url = 'http://localhost:8080/api/detail';

  constructor(private httpClient: HttpClient) {}

  getDetails(): Observable<DetailModel[]> {
    return this.httpClient.get<DetailModel[]>(this.url);
  }

  getDetailById(detailId): Observable<DetailModel> {
    return this.httpClient.get<DetailModel>(`${this.url}/${detailId}`);
  }

  createDetail(detail: DetailModel): Observable<DetailModel> {
    return this.httpClient.post<DetailModel>(this.url, detail);
  }

  updateDetail(detail: DetailModel): Observable<DetailModel> {
    return this.httpClient.put<DetailModel>(this.url, detail);
  }
}

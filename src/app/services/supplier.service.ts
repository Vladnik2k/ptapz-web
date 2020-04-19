import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SupplierModel} from '../objects/supplier.model';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private url = 'http://localhost:8080/api/supplier';

  constructor(private httpClient: HttpClient) {}

  getSuppliers(): Observable<SupplierModel[]> {
    return this.httpClient.get<SupplierModel[]>(this.url);
  }

  getSupplierById(supplierId): Observable<SupplierModel> {
    return this.httpClient.get<SupplierModel>(`${this.url}/${supplierId}`);
  }

  createSupplier(supplier: SupplierModel): Observable<SupplierModel> {
    return this.httpClient.post<SupplierModel>(this.url, supplier);
  }

  updateSupplier(supplier: SupplierModel): Observable<SupplierModel> {
    return this.httpClient.put<SupplierModel>(this.url, supplier);
  }
}

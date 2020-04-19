import {DetailModel} from './detail.model';
import {SupplierModel} from './supplier.model';

export interface SupplyModel {
  id: number;
  supplier: SupplierModel;
  detail: DetailModel;
  numberOfDetails: number;
  createdAt: Date;
}

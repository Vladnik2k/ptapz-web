import {DetailModel} from './detail.model';

export interface PriceHistoryModel {
  id: number;
  detail: DetailModel;
  price: number;
  changedAt: Date;
}

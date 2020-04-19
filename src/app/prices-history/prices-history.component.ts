import { Component, OnInit } from '@angular/core';
import {PriceHistoryModel} from '../objects/priceHistory.model';
import {PriceHistoryService} from '../services/priceHistroy.service';

@Component({
  selector: 'app-prices-history',
  templateUrl: './prices-history.component.html',
  styleUrls: ['./prices-history.component.css']
})
export class PricesHistoryComponent implements OnInit {

  pricesHistory: PriceHistoryModel[] = [];

  constructor(private priceHistoryService: PriceHistoryService) { }

  ngOnInit() {
    this.priceHistoryService.getPricesHistory()
      .subscribe(pricesHistory => this.pricesHistory = pricesHistory);
  }

}

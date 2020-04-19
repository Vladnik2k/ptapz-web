import {Component, Input, OnInit} from '@angular/core';
import {PriceHistoryModel} from '../../objects/priceHistory.model';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {

  @Input() priceHistory: PriceHistoryModel;

  constructor() { }

  ngOnInit() {
  }

}

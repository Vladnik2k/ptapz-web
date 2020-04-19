import { Component, OnInit } from '@angular/core';
import {SupplyModel} from '../objects/supply.model';
import {SupplyService} from '../services/supply.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {
  supplies: SupplyModel[] = [];

  constructor(private supplyService: SupplyService) { }

  ngOnInit() {
    this.supplyService.getSupplies()
      .subscribe(supplies => this.supplies = supplies);
  }

}

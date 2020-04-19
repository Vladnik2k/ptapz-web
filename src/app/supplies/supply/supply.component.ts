import {Component, Input, OnInit} from '@angular/core';
import {SupplyModel} from '../../objects/supply.model';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  @Input() supply: SupplyModel;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {SupplierModel} from '../../objects/supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() supplier: SupplierModel;
  constructor() { }

  ngOnInit() {
  }

}

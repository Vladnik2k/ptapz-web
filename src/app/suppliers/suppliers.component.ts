import {Component, OnInit} from '@angular/core';
import {SupplierModel} from '../objects/supplier.model';
import {SupplierService} from '../services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  supplies: SupplierModel[] = [];

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.supplierService.getSuppliers()
      .subscribe(suppliers => this.supplies = suppliers);
  }

}

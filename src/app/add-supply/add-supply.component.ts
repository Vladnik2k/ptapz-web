import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SupplyService} from '../services/supply.service';
import {DetailsService} from '../services/details.service';
import {SupplierService} from '../services/supplier.service';
import {DetailModel} from '../objects/detail.model';
import {SupplierModel} from '../objects/supplier.model';

@Component({
  selector: 'app-add-supply',
  templateUrl: './add-supply.component.html',
  styleUrls: ['./add-supply.component.css']
})
export class AddSupplyComponent implements OnInit {

  details: DetailModel[] = [];
  suppliers: SupplierModel[] = [];
  form: FormGroup = null;

  constructor(private supplyService: SupplyService,
              private detailsService: DetailsService,
              private supplierService: SupplierService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.formInit();
    this.detailsService.getDetails()
      .subscribe(details => {
        this.details = details;
        this.form.controls.detailId.setValue(details[0].id);
      });
    this.supplierService.getSuppliers()
      .subscribe(suppliers => {
        this.suppliers = suppliers;
        this.form.controls.supplierId.setValue(suppliers[0].id);
      });
  }

  formInit(): void {
    this.form = this.formBuilder.group({
      supplierId: [''],
      detailId: [''],
      numberOfDetails: ['']
    });
  }

  onSubmit(): void {
    const rawValue = this.form.getRawValue();
    rawValue.numberOfDetails = +rawValue.numberOfDetails;
    this.supplyService.createSupply(rawValue).subscribe(_ => {
      this.goToSupplies();
    });
  }

  goToSupplies(): void {
    this.router.navigateByUrl('supply');
  }
}

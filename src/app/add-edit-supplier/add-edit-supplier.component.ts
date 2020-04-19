import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SupplierModel} from '../objects/supplier.model';
import {SupplierService} from '../services/supplier.service';

@Component({
  selector: 'app-add-edit-supplier',
  templateUrl: './add-edit-supplier.component.html',
  styleUrls: ['./add-edit-supplier.component.css']
})
export class AddEditSupplierComponent implements OnInit {

  form: FormGroup = null;
  supplier: SupplierModel;

  constructor(private supplierService: SupplierService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formInit();
    if (this.router.url.split('/').filter(r => r === 'edit').length) {
      const supplierId = +this.activatedRoute.snapshot.paramMap.get('supplierId');
      this.supplierService.getSupplierById(supplierId)
        .subscribe(supplier => {
          this.supplier = supplier;
          this.formInit();
        }, error => this.goToSuppliers());
    }
  }

  formInit(): void {
    this.form = this.formBuilder.group({
      name: [this.supplier ? this.supplier.name : ''],
      address: [this.supplier ? this.supplier.address : ''],
      phoneNumber: [this.supplier ? this.supplier.phoneNumber : '']
    });
  }

  onSubmit(): void {
    const rawValue = this.form.getRawValue();
    if (this.supplier) {
      rawValue.id = this.supplier.id;
      this.supplierService.updateSupplier(rawValue).subscribe(_ => {
        this.goToSuppliers();
      });
    } else {
      this.supplierService.createSupplier(rawValue).subscribe(_ => {
        this.goToSuppliers();
      });
    }
  }

  goToSuppliers(): void {
    this.router.navigateByUrl('suppliers');
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DetailsService} from '../services/details.service';
import {DetailModel} from '../objects/detail.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-edit-detail',
  templateUrl: './add-edit-detail.component.html',
  styleUrls: ['./add-edit-detail.component.css']
})
export class AddEditDetailComponent implements OnInit {

  form: FormGroup = null;
  detail: DetailModel;

  constructor(private detailsService: DetailsService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formInit();
    if (this.router.url.split('/').filter(r => r === 'edit').length) {
      const detailId = +this.activatedRoute.snapshot.paramMap.get('detailId');
      this.detailsService.getDetailById(detailId)
        .subscribe(detail => {
          this.detail = detail;
          this.formInit();
        }, error => this.goToDetails());
    }
  }

  formInit(): void {
    this.form = this.formBuilder.group({
      name: [this.detail ? this.detail.name : ''],
      vendorCode: [this.detail ? this.detail.vendorCode : ''],
      note: [this.detail ? this.detail.note : '']
    });
  }

  onSubmit(): void {
    const rawValue = this.form.getRawValue();
    if (this.detail) {
      rawValue.id = this.detail.id;
      this.detailsService.updateDetail(rawValue).subscribe(_ => {
        this.goToDetails();
      });
    } else {
      this.detailsService.createDetail(rawValue).subscribe(_ => {
        this.goToDetails();
      });
    }
  }

  goToDetails(): void {
    this.router.navigateByUrl('details');
  }
}

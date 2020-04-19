import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {PriceHistoryService} from '../services/priceHistroy.service';
import {DetailsService} from '../services/details.service';
import {DetailModel} from '../objects/detail.model';

@Component({
  selector: 'app-add-price-history',
  templateUrl: './add-price-history.component.html',
  styleUrls: ['./add-price-history.component.css']
})
export class AddPriceHistoryComponent implements OnInit {

  details: DetailModel[] = [];
  form: FormGroup = null;

  constructor(private priceHistoryService: PriceHistoryService,
              private detailsService: DetailsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.formInit();
    this.detailsService.getDetails()
      .subscribe(details => {
        this.details = details;
        this.form.controls.detailId.setValue(details[0].id);
      });
  }

  formInit(): void {
    this.form = this.formBuilder.group({
      detailId: [''],
      price: [''],
      changedAt: ['']
    });
  }

  onSubmit(): void {
    const rawValue = this.form.getRawValue();
    this.priceHistoryService.createPriceHistory(rawValue).subscribe(_ => {
      this.goToPriceHistory();
    });
  }

  goToPriceHistory(): void {
    this.router.navigateByUrl('price-history');
  }

}

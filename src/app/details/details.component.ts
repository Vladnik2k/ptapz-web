import {Component, OnInit} from '@angular/core';
import {DetailModel} from '../objects/detail.model';
import {DetailsService} from '../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: DetailModel[] = [];

  constructor(private detailService: DetailsService) { }

  ngOnInit() {
    this.detailService.getDetails()
      .subscribe(details => this.details = details);
  }
}

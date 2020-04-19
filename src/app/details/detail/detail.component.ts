import {Component, Input, OnInit} from '@angular/core';
import {DetailModel} from '../../objects/detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() detail: DetailModel;
  constructor() { }

  ngOnInit() {
  }

}

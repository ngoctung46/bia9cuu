import { Component, OnInit, Input } from '@angular/core';
import { Category }  from '../../models/category';
@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  @Input() category;
  constructor() {
  }

  ngOnInit() {
  }

}

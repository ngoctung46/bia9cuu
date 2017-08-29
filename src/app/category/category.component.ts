import { Component, OnInit, HostBinding } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui main container';
  constructor(private categoryService: CategoryService) { }
  categories: Category[]
  ngOnInit() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

}

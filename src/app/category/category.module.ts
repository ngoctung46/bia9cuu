import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeveragesComponent } from './beverages/beverages.component';
import { BeersComponent } from './beers/beers.component';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryService } from '../services/category.service';
import { CategoryTableComponent } from './category-table/category-table.component';
@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  providers: [ CategoryService ],
  declarations: [BeveragesComponent, BeersComponent, CategoryComponent, CategoryTableComponent]
})
export class CategoryModule { }

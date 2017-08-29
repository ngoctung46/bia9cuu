import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';
import { BeersComponent } from './beers/beers.component';
import { CategoryComponent } from './category.component';
const categoryRoutes = [
    { 
        path: 'category',
        component: CategoryComponent,
        children: [
            { path: '', redirectTo: 'beverage', pathMatch: 'full'},
            { path: 'beverage', component: BeveragesComponent },
            { path: 'beer', component: BeersComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes)
    ],
    exports: [ RouterModule ]
})

export class CategoryRoutingModule {}
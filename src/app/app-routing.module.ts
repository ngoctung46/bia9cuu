import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes = [
    { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
    { path: 'category', loadChildren: './category/category.module#CategoryModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
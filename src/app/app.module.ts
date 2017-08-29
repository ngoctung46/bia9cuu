import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ListService } from './services/list.service';
import { RouterModule } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { ContactModule } from './contact/contact.module';
@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    CategoryModule,
    HomeModule,
    FooterModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

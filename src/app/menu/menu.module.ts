import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuService } from '../services/menu.service';
@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  providers: [MenuService],
  declarations: [MenuComponent],
  exports: [ MenuComponent ]
})
export class MenuModule { }

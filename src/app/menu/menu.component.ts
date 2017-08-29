import { Component, OnInit, Host } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../models/menu-item';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenu();
  }

  private getMenu() {
    this.menuService.getAll().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

}

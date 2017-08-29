import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../models/menu-item';
import 'rxjs/add/operator/map';
@Injectable()
export class MenuService {
  private menuApi = `http://localhost:3000/api/menu`;
  constructor(private http: Http) { }
  public getAll() {
    return this.http.get(this.menuApi)
                    .map(res => res.json())
                    .map(res => <MenuItem[]>res.items)
  }
}

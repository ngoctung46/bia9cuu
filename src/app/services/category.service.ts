import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from '../models/Category';
@Injectable()
export class CategoryService {
  private categoryApi = `http://localhost:3000/api/category`;
  constructor(private http: Http) { }
  public getAll() {
    return this.http.get(this.categoryApi)
                    .map(res => res.json())
                    .map(res => <Category[]>res.items)
  }
}

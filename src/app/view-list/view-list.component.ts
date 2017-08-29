import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  private lists: List[] = [];
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.loadList();
  }

  public loadList() {
    this.listService.getAllList().subscribe(res => this.lists = res);
  }

  public deleteList(list: List) {
    this.listService.deleteList(list._id).subscribe( res => this.lists = this.lists.filter( lists => lists !== list));
  }

  public onAddList(newList) {
    this.lists.push(newList);
  }

  public updateList(updateList) {
    this.listService.updateList(updateList).subscribe(res => console.log(res.message));
  }

}

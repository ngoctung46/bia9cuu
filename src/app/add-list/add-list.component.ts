import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  private newList: List;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.newList = {
      title: '',
      description: '',
      category: '',
      _id: ''
    }
  }

  public onSubmit() {
    this.listService.addList(this.newList).subscribe( res => {
      if (res.success == true) {
        console.log(res);
        this.addList.emit(this.newList);
      }
    });
  }

}

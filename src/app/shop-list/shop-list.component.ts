import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  taskList: Array<any> = [];

  taskName = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if(this.taskName.value == '') {

    } else {
      this.taskList.push(this.taskName.value);
    }
  }

  deleteTask() {
    this.taskList.pop()
  }

  editTask() {
    
  }
}

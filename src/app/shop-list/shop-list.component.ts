import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShopList } from '../interfaces/shop-list';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  taskList: Array<ShopList> = [];

  taskName = new FormControl('');
  taskPrice = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if(this.taskName.value == '') {

    } else {
      this.taskList.push(this.taskName.value, this.taskPrice.value);
    }
  }

  deleteTask() {
    this.taskList.pop()
  }

  editTask() {
    
  }
}

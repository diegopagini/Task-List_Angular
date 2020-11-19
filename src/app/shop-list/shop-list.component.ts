import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopList } from '../interfaces/shop-list';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  taskList: ShopList[] = [];

  taskName = new FormControl('');
  taskPrice = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if(this.taskName.value != '' && this.taskPrice.value != '') {
      const task: ShopList = {
<<<<<<< HEAD
        name: this.taskName.value, 
=======
        name: this.taskName.value,
>>>>>>> e9776d02c557d52f6ab227189be6fcd42f75056b
        price: this.taskPrice.value
      }
      this.taskList.push(task);
    }
  }

  deleteTask(i) {
    this.taskList.splice(i, 1)
  }

  editTask() {
    
  }
}

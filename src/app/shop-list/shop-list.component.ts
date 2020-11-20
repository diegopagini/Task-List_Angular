import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopList } from '../interfaces/shop-list';

declare var M: any;

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  taskList: ShopList[] = [];

  taskName = new FormControl('');
  taskPrice = new FormControl('');
  editTaksName = new FormControl('')
  editTaskPrice = new FormControl('')


  constructor() {}

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });
  }

  addTask() {
    if(this.taskName.value != '' && this.taskPrice.value != '') {
      const task: ShopList = {
        name: this.taskName.value,
        price: this.taskPrice.value
      }
      this.taskList.push(task);
    }
    this.taskName.setValue('');
    this.taskPrice.setValue('');
  }

  deleteTask(i) {
    this.taskList.splice(i, 1)
  }

  editTask(i) {
    this.editTaksName.setValue(this.taskList[i].name)
    this.editTaskPrice.setValue(this.taskList[i].price)
  }

  taskEdited() {
    console.log(this.editTaksName.value)
  }
}

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopList } from '../interfaces/shop-list';

declare var M: any;

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  taskList: ShopList[] = [];

  taskName = new FormControl('', [Validators.required]);
  taskPrice = new FormControl('');
  editTaksName = new FormControl('');
  editTaskPrice = new FormControl('');
  totalPrice: number = 0;
  curretValue: number;

  constructor() {}

  ngOnInit(): void {
    //Modal
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });

  }

  onAddProduct() {
    this.addTask();
    this.setTotal();
  }

  addTask() {
    if (this.taskName.valid  && this.taskPrice.valid) {
      const task: ShopList = {
        name: this.taskName.value,
        price: this.taskPrice.value,
      };
      this.taskList.push(task);
    }
    this.taskName.setValue('');
    this.taskPrice.setValue('');
  }

  setTotal() {
    let accum = 0;
    this.taskList.forEach((el) => {
      accum += el.price;
    });
    this.totalPrice = accum
  }

  deleteTask(i) {
    this.taskList.splice(i, 1);
    this.setTotal();
  }

  editTask(i) {
    this.curretValue = i;
    this.editTaksName.setValue(this.taskList[i].name);
    this.editTaskPrice.setValue(`$ ${this.taskList[i].price}`);
    this.setTotal();
  }

  taskEdited() {
    this.taskList[this.curretValue].name = this.editTaksName.value;
    this.taskList[this.curretValue].price = this.editTaskPrice.value;
  }
}

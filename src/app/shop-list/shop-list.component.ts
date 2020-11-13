import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  taskList: Array<any> = ['Aprender Angular', 'CRUD'];

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    this.taskList.push('Tiene que ir la Tarea ACA');
  }
}

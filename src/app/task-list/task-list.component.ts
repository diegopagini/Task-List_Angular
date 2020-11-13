import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskList: Array<any> = ['Aprender Angular', 'CRUD'];

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    this.taskList.push('Tiene que ir la Tarea ACA');
  }
}

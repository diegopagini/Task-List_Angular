import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
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

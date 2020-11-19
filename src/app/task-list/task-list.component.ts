import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskList: Array<any> = [];

  taskName = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if(this.taskName.value != '') {
      this.taskList.push(this.taskName.value);
      this.taskName.setValue('')
    }
  }

  deleteTask(i) {
    this.taskList.splice(i, 1)
  }

  editTask(i) {
    
  }
}

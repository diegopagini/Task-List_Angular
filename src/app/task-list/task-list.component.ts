import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  taskList: Array<any> = [];

  taskName = new FormControl('', Validators.required);
  editTaksName = new FormControl('')
  curretValue;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });
  
  }

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
    this.editTaksName.setValue(this.taskList[i])
  }
  taskEdited() {
    console.log(this.editTaksName.value)
  }
}

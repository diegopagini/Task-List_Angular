import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-list';
  color = '';

  constructor() { 

  }

  onColorEmit(e) {
    this.color = e;
  }
}

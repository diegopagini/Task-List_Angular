import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  color = new FormControl('#ffffff');
  @Output() colorEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setBackgroundColor() {
      this.color.valueChanges.subscribe(res => {
        document.getElementById('nav').style.background = res;
        this.colorEmit.emit(res);
      })
  }
  

}

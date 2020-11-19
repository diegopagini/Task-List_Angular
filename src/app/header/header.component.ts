import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() color: FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

  setBackgroundColor() {
    // document.getElementById('nav').style.background = this.color.value;
    this.color.valueChanges.subscribe(res => {
      res = document.getElementById('nav').style.background = this.color.value
    })
  }

}

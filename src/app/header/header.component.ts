import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color = new FormControl('#ffffff')
  constructor() { }

  ngOnInit(): void {
  }

  setBackgroundColor() {
    document.getElementById('nav').style.background = this.color.value;
  }

}

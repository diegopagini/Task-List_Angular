import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() color: FormControl;
  
  constructor() { }

  ngOnInit(): void {
    this.setBackgroundColor()
  }

  setBackgroundColor() {
    // document.getElementById('nav').style.background = this.color.value;
    this.color.valueChanges.subscribe(res => {
      res = document.getElementById('footer').style.background = this.color.value
    })
  }
}

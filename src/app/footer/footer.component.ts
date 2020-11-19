import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
 @Input() color: string;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    if (changes.currentValue != '') {
      this.listenColorChange();
    }
  }

  listenColorChange() {
    document.getElementById('footer').style.background = this.color;
  }
}

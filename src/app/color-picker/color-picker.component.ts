import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit, OnChanges {
  background = '#00e067';

  constructor() {
  }

  ngOnInit() {
  }

  onChange(a) {
    console.log(a);
    this.background =a;
  }

  ngOnChanges(changes: SimpleChanges): void {
   }
}

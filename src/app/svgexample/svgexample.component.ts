import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svgexample',
  templateUrl: './svgexample.component.svg',
  styleUrls: ['./svgexample.component.css']
})
export class SvgexampleComponent  {

  fill = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    this.fill = `rgb(${r}, ${g}, ${b})`;
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Component1Component } from './component1/component1.component';
@Component({
  selector: 'app-timing-demo',
  templateUrl: './timing-demo.component.html',
  styleUrls: ['./timing-demo.component.css']
})
export class TimingDemoComponent implements OnInit, AfterViewInit {

  @ViewChild(Component1Component, { static: false }) c1 !: Component1Component;
  constructor() { }

  ngOnInit() {
    console.log(this.c1);
  }

  ngAfterViewInit() {
    console.log(this.c1);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgexampleComponent } from './svgexample.component';

describe('SvgexampleComponent', () => {
  let component: SvgexampleComponent;
  let fixture: ComponentFixture<SvgexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingDemoComponent } from './timing-demo.component';

describe('TimingDemoComponent', () => {
  let component: TimingDemoComponent;
  let fixture: ComponentFixture<TimingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

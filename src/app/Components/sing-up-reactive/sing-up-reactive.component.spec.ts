import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpReactiveComponent } from './sing-up-reactive.component';

describe('SingUpReactiveComponent', () => {
  let component: SingUpReactiveComponent;
  let fixture: ComponentFixture<SingUpReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingUpReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayAnimationComponent } from './two-way-animation.component';

describe('TwoWayAnimationComponent', () => {
  let component: TwoWayAnimationComponent;
  let fixture: ComponentFixture<TwoWayAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

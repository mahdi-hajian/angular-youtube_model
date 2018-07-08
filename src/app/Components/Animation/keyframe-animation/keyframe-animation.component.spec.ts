import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeAnimationComponent } from './keyframe-animation.component';

describe('KeyframeAnimationComponent', () => {
  let component: KeyframeAnimationComponent;
  let fixture: ComponentFixture<KeyframeAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyframeAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

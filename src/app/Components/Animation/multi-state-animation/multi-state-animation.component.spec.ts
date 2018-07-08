import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStateAnimationComponent } from './multi-state-animation.component';

describe('MultiStateAnimationComponent', () => {
  let component: MultiStateAnimationComponent;
  let fixture: ComponentFixture<MultiStateAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiStateAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStateAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComponenetComponent } from './two-componenet.component';

describe('TwoComponenetComponent', () => {
  let component: TwoComponenetComponent;
  let fixture: ComponentFixture<TwoComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

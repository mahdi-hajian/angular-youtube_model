import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponenetComponent } from './one-componenet.component';

describe('OneComponenetComponent', () => {
  let component: OneComponenetComponent;
  let fixture: ComponentFixture<OneComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

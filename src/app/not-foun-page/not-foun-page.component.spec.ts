import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounPageComponent } from './not-foun-page.component';

describe('NotFounPageComponent', () => {
  let component: NotFounPageComponent;
  let fixture: ComponentFixture<NotFounPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFounPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFounPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

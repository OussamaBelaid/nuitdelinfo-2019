import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollegeComponent } from './my-college.component';

describe('MyCollegeComponent', () => {
  let component: MyCollegeComponent;
  let fixture: ComponentFixture<MyCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

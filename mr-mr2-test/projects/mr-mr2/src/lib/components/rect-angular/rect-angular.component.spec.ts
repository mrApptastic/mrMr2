import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectAngularComponent } from './rect-angular.component';

describe('RectAngularComponent', () => {
  let component: RectAngularComponent;
  let fixture: ComponentFixture<RectAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

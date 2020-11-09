import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrMr2Component } from './mr-mr2.component';

describe('MrMr2Component', () => {
  let component: MrMr2Component;
  let fixture: ComponentFixture<MrMr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrMr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrMr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainCanvasComponent } from './captain-canvas.component';

describe('CaptainCanvasComponent', () => {
  let component: CaptainCanvasComponent;
  let fixture: ComponentFixture<CaptainCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptainCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BratislavaComponent } from './bratislava.component';

describe('BratislavaComponent', () => {
  let component: BratislavaComponent;
  let fixture: ComponentFixture<BratislavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BratislavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BratislavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

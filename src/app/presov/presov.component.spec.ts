import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresovComponent } from './presov.component';

describe('PresovComponent', () => {
  let component: PresovComponent;
  let fixture: ComponentFixture<PresovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

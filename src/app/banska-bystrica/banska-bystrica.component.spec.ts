import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanskaBystricaComponent } from './banska-bystrica.component';

describe('BanskaBystricaComponent', () => {
  let component: BanskaBystricaComponent;
  let fixture: ComponentFixture<BanskaBystricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanskaBystricaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanskaBystricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

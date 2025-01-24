import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosiceComponent } from './kosice.component';

describe('KosiceComponent', () => {
  let component: KosiceComponent;
  let fixture: ComponentFixture<KosiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KosiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KosiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

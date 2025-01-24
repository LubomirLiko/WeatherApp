import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrencinComponent } from './trencin.component';

describe('TrencinComponent', () => {
  let component: TrencinComponent;
  let fixture: ComponentFixture<TrencinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrencinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrencinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

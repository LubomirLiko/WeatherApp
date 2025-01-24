import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnavaComponent } from './trnava.component';

describe('TrnavaComponent', () => {
  let component: TrnavaComponent;
  let fixture: ComponentFixture<TrnavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrnavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrnavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

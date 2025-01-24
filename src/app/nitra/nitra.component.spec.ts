import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitraComponent } from './nitra.component';

describe('NitraComponent', () => {
  let component: NitraComponent;
  let fixture: ComponentFixture<NitraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NitraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

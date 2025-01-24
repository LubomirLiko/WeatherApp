import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZilinaComponent } from './zilina.component';

describe('ZilinaComponent', () => {
  let component: ZilinaComponent;
  let fixture: ComponentFixture<ZilinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZilinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZilinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

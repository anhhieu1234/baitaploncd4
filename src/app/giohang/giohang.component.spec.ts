import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiohangComponent } from './giohang.component';

describe('GiohangComponent', () => {
  let component: GiohangComponent;
  let fixture: ComponentFixture<GiohangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiohangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiohangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDeClassesComponent } from './binding-de-classes.component';

describe('BindingDeClassesComponent', () => {
  let component: BindingDeClassesComponent;
  let fixture: ComponentFixture<BindingDeClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingDeClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingDeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio4Page } from './ejercicio4.page';

describe('Ejercicio4Page', () => {
  let component: Ejercicio4Page;
  let fixture: ComponentFixture<Ejercicio4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

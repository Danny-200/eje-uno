import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio2Page } from './ejercicio2.page';

describe('Ejercicio2Page', () => {
  let component: Ejercicio2Page;
  let fixture: ComponentFixture<Ejercicio2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

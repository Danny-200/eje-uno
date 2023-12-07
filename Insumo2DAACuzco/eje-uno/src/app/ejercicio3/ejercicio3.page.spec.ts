import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio3Page } from './ejercicio3.page';

describe('Ejercicio3Page', () => {
  let component: Ejercicio3Page;
  let fixture: ComponentFixture<Ejercicio3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

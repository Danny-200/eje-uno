import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio5Page } from './ejercicio5.page';

describe('Ejercicio5Page', () => {
  let component: Ejercicio5Page;
  let fixture: ComponentFixture<Ejercicio5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaClienteComponent } from './poliza-cliente.component';

describe('PolizaClienteComponent', () => {
  let component: PolizaClienteComponent;
  let fixture: ComponentFixture<PolizaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolizaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

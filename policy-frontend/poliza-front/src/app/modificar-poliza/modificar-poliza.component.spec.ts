import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPolizaComponent } from './modificar-poliza.component';

describe('ModificarPolizaComponent', () => {
  let component: ModificarPolizaComponent;
  let fixture: ComponentFixture<ModificarPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

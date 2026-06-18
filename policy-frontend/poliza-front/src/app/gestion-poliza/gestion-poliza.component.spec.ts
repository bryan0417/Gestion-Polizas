import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPolizaComponent } from './gestion-poliza.component';

describe('GestionPolizaComponent', () => {
  let component: GestionPolizaComponent;
  let fixture: ComponentFixture<GestionPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

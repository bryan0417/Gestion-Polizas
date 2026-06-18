import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPolizaComponent } from './nueva-poliza.component';

describe('NuevaPolizaComponent', () => {
  let component: NuevaPolizaComponent;
  let fixture: ComponentFixture<NuevaPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

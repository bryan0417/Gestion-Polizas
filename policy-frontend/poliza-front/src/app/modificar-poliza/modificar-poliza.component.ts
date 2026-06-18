import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PolizasServiceService } from '../services/polizas-service.service';

@Component({
  selector: 'app-modificar-poliza',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './modificar-poliza.component.html',
  styleUrl: './modificar-poliza.component.css'
})
export class ModificarPolizaComponent {

  private fb = inject(FormBuilder);

  poliza!: any;
  tipoGestion!: string;
  resultado!: string;
  polizaData = this.fb.group({
    id: [''],
    numeroPoliza: [''],
    tipo: [''],
    aseguradora: [''],
    fechaInicio: [''],
    fechaVencimiento: [''],
    estado: ['']
  });

  /**
   * Se inicializa el componente inyectando el servicio de poliza y el router para navegar
   * @param route 
   * @param polizaService 
   */
  constructor (
    private route: Router,
    private polizaService: PolizasServiceService
  ) {}

  /**
   * recibe la data enviada de la navegacion anterior para posterior imprimir en pantalla
   */
  ngOnInit() {
    this.poliza = history.state.polizaData;
    console.log(this.poliza);
    this.mapearData();
  }

  /**
   * Funcion para actualizar la poliza
   */
  actualizarPoliza() {
    console.log(this.polizaData.value);
    console.log(this.tipoGestion);
    console.log(this.resultado);

    const poliza = this.polizaData.value;

    this.polizaService.actualizarPoliza(poliza, this.tipoGestion, this.resultado).subscribe(
      next => {
        console.log("Poliza actualizada");
      },
      error => {
        console.log("Error al actualizar la poliza", error);
      }
    )
  }

  /**
   * Funcion para mapear los datos recibidos
   */
  mapearData() {
    this.polizaData.patchValue({
      id: this.poliza.id,
      numeroPoliza: this.poliza.numeroPoliza,
      tipo: this.poliza.tipo,
      aseguradora: this.poliza.aseguradora,
      fechaInicio: this.poliza.fechaInicio,
      fechaVencimiento: this.poliza.fechaVencimiento,
      estado: this.poliza.estado
    });
  }

  /**
   * Funcion para volver a la navegacion anterior
   */
  volver() {
    this.route.navigate(['/poliza-detalle'], { state: { clienteId: this.poliza.cliente.id }});
  }

}

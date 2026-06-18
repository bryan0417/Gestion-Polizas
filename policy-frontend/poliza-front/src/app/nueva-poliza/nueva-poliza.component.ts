import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PolizasServiceService } from '../services/polizas-service.service';
import { ClientesServiceService } from '../services/clientes-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nueva-poliza',
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './nueva-poliza.component.html',
  styleUrl: './nueva-poliza.component.css'
})
export class NuevaPolizaComponent {

  private fb = inject(FormBuilder);

  clientes: any[] = [];
  tipoGestion: string = "";

  clienteForm = this.fb.group({
    cliente: ['']
  });

  nuevaPolizaForm = this.fb.group({
    cliente: [''],
    numeroPoliza: ['', Validators.required],
    tipo: ['', Validators.required],
    aseguradora: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaVencimiento: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private polizaService: PolizasServiceService,
    private clienteService: ClientesServiceService
  ) { }

  /**
   * Inicializa la pagina llamando el metodo para consultar los clientes
   */
  ngOnInit(): void {
    this.consultarClientes();
  }

  /**
   * Funcion para consultar los clientes
   */
  consultarClientes(): void {
    this.clienteService.consultarClientes().subscribe({
      next: (response) => {
        console.log('Clientes consultados:', response);
        this.clientes = response;
      }
    });
  }

  /**
   * Funcion para guardar la poliza
   */
  guardarPoliza() {
    const nuevaPoliza = this.nuevaPolizaForm.value;
    const tipoGestion = this.tipoGestion;
    nuevaPoliza.cliente = this.clienteForm.get('cliente')?.value;
    if (this.nuevaPolizaForm.valid) {
      console.log('Nueva póliza a guardar:', nuevaPoliza);

      this.polizaService.crearPoliza(nuevaPoliza, tipoGestion).subscribe({
        next: (response) => {
          console.log('Póliza creada:', response);
          this.router.navigate(['/listar-polizas']);
        },
        error: (error) => {
          console.error('Error al crear la póliza:', error);
        }
      });
    }
  }

}

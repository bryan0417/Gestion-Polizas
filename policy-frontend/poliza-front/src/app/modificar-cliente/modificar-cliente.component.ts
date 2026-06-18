import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientesServiceService } from '../services/clientes-service.service';

@Component({
  selector: 'app-modificar-cliente',
  imports: [ReactiveFormsModule,CommonModule,FormsModule, RouterLink],
  templateUrl: './modificar-cliente.component.html',
  styleUrl: './modificar-cliente.component.css'
})
export class ModificarClienteComponent {

  private fb = inject(FormBuilder);

  
  /**
   * Variables
   */
  clientes: any[] = [];
  clienteForm = this.fb.group({
    id: ['']
  });
  clienteData = this.fb.group({
    id: [''],
    nombre: [''],
    documento: [''],
    celular: [''],
    correo: [''],
    fechaCreacion: ['']
  });

  /**
   * Se inicializa el componente inyectando el servicio de clientes y el router
   * @param clienteService 
   * @param router 
   */
  constructor(
    private clienteService: ClientesServiceService,
    private router: Router,
  ) {}

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
   * Funcion para cargar los datos de un cliente
   * @returns 
   */
  cargarCliente():void {
    if (this.clienteForm.invalid) {
      Object.values(this.clienteForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    const clienteId = Number(this.clienteForm.value.id);

    this.clienteService.consultarCliente(clienteId).subscribe({
      next: (response) => {
        console.log('Cliente consultado:', response);
        this.clienteData.patchValue(response);
        alert(`Cliente ${this.clienteData.value.nombre} cargado exitosamente`);
      },
      error: (error) => {
        console.error('Error al cargar el cliente:', error);
        alert('Error al cargar el cliente');
      }
    });
  }

  /**
   * Funcion para actualizar los datos del cliente
   */
  actualizarCliente(): void {
    const cliente = this.clienteData.value;
    console.log('Actualizando cliente:', cliente);

    this.clienteService.actualizarCliente(cliente).subscribe({
      next: (response) => {
        console.log('Cliente actualizado:', response);
        alert(`Cliente ${cliente.nombre} actualizado exitosamente`);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al actualizar el cliente:', error);
        alert('Hubo un problema al actualizar el cliente. Inténtalo nuevamente.');
      }
    });
  }
}

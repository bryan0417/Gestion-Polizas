import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClientesServiceService } from '../services/clientes-service.service';

@Component({
  selector: 'app-nuevo-cliente',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './nuevo-cliente.component.html',
  styleUrl: './nuevo-cliente.component.css'
})
export class NuevoClienteComponent {

  private fb = inject(FormBuilder);

  clienteForm = this.fb.group({
    nombre: [''],
    documento: [''],
    celular: [''],
    correo: [''],
    fechaCreacion: ['']
  });

  /**
   * Se inicializa el componente inyectando el servicio de cliente y el router para navegar
   * @param router 
   * @param clienteService 
   */
  constructor(
    private router: Router,
    private clienteService: ClientesServiceService
  ) { }

  /**
   * Funcion para guardar cliente
   */
  guardarCliente() {
    const cliente = this.clienteForm.value;
    console.log('Guardando cliente:', cliente);
    this.clienteService.crearCliente(cliente).subscribe({
      next: (response) => {
        console.log('Cliente creado:', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        alert('Hubo un problema al guardar la clínica. Inténtalo nuevamente.');
      }
    });

  }
}

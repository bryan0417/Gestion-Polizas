import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PolizasServiceService } from '../services/polizas-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-poliza-cliente',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './poliza-cliente.component.html',
  styleUrl: './poliza-cliente.component.css'
})
export class PolizaClienteComponent {

  polizas: any[] = [];
  cliente: string = "";
  clienteId!: string;

  /**
   * Se inicializa el componente inyectando el servicio de poliza y el router para navegar
   * @param polizasService 
   * @param router 
   */
  constructor(
    private polizasService: PolizasServiceService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.clienteId = history.state.clienteId;
    this.consultarPolizasCliente(Number(this.clienteId));
  }

  consultarPolizasCliente(clientId: number): void {
    this.polizasService.consultarPolizaPorCliente(clientId).subscribe(
      next => {
        this.polizas = next
        if (this.polizas.length > 0) {
          this.cliente = this.polizas[0].cliente.nombre;
        }
        
        console.log('Polizas del cliente:', this.polizas);
      },
      error => {
        console.log('Error al cargar polizas del cliente:', error);
      }
    );
  }

  verGestionPoliza(polizaId: number): void {
    this.router.navigate(['/historial'], {state: { poliza: polizaId, cliente: this.clienteId }});
  }

  routerModificar(poliza: any) {
    this.router.navigate(['/mofificar'], { state: { polizaData: poliza } });
  }

}

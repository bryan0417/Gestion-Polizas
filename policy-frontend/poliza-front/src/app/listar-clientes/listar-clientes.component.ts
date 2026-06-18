import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ClientesServiceService } from '../services/clientes-service.service';

@Component({
  selector: 'app-listar-clientes',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './listar-clientes.component.html',
  styleUrl: './listar-clientes.component.css'
})
export class ListarClientesComponent {
  clientes: any[] = [];

  /**
   * Inicia el componente de clientes servicio
   * @param clientesService
   */
  constructor(
    private clientesService: ClientesServiceService,
    private router: Router
  ) { }

  /**
   * Inicializa la pagina llamando el metodo para consultar los clientes
   */
  ngOnInit() {
    this.consultarClientes();
  }

  /**
   * Funcion para consultar los clientes desde el servicio
   */
  consultarClientes() {
    this.clientesService.consultarClientes().subscribe(
      next => {
        this.clientes = next;
      },
      error => {
        console.error('Error al consultar los clientes', error);
      }
    );
  }

  /**
   * Navega a la pantalla de detalle de pólizas de un cliente, 
   * transfiriendo su ID de forma segura a través del estado de la ruta.
   * @param clienteId 
   */
  verPolizas(clienteId: number) {
    this.router.navigate(['/poliza-detalle'], {state: {clienteId: clienteId}});
  }
}

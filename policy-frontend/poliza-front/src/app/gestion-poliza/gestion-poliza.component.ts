import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GestionesServiceService } from '../services/gestiones-service.service';

@Component({
  selector: 'app-gestion-poliza',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './gestion-poliza.component.html',
  styleUrl: './gestion-poliza.component.css'
})
export class GestionPolizaComponent {

  gestiones: any[] = [];
  cliente!:string;

  /**
   * Inicia el componente de gestion servicio y route para navegar entre paginas
   * @param gestionService 
   * @param route 
   */
  constructor(
    private gestionService: GestionesServiceService,
    private route: Router,
  ) {}

  /**
   * Inicializa la pagina llamando el metodo de consultar el historial por la poliza
   */
  ngOnInit(): void {
    const polizaId = history.state.poliza;
    this.cliente = history.state.cliente;
    this.consultarGestionesPorPoliza(Number(polizaId));
  }

  /**
   * Funcion para consultar al backend
   * @param polizaId 
   */
  consultarGestionesPorPoliza(polizaId: number) {
    console.log("el id de la poliza es: ",polizaId);
    this.gestionService.consultarHistorialPorPoliza(polizaId).subscribe(
      next => {
        this.gestiones = next
        console.log('Polizas del cliente:', this.gestiones);
      },
      error => {
        console.log('Error al cargar el historial:', error);
      }
    )
  }

  /**
   * Funcion para volver a la pantalla anterior y se usa state para hacer referencia a que cliente se navega
   */
  volver() {
    this.route.navigate(['/poliza-detalle'], { state: { clienteId: this.cliente }});
  }

}

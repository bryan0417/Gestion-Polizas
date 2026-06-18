import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PolizasServiceService } from '../services/polizas-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-polizas',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './listar-polizas.component.html',
  styleUrl: './listar-polizas.component.css'
})
export class ListarPolizasComponent {

  polizas: any[] = [];

  /**
   * Inicia el componente de poliza servicio y route para navegar entre paginas
   * @param polizasService 
   * @param router 
   */
  constructor(
    private polizasService: PolizasServiceService,
    private router: Router
  ) {};

  /**
   * Inicializa la pagina llamando el metodo de consultar las polizas
   */
  ngOnInit(): void {
    this.consultarPolizas();
  }

  /**
   * Funcion para consultar las polizas
   */
  consultarPolizas(): void {
    this.polizasService.consultarPolizas().subscribe(response => {
      this.polizas = response;
    });
  }

  /**
   * Funcion para navegar
   */
  verGestionPoliza(): void {
    this.router.navigate(['/historial']);
  }
}

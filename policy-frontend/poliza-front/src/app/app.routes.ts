import { Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { ListarPolizasComponent } from './listar-polizas/listar-polizas.component';
import { NuevaPolizaComponent } from './nueva-poliza/nueva-poliza.component';
import { PolizaClienteComponent } from './poliza-cliente/poliza-cliente.component';
import { GestionPolizaComponent } from './gestion-poliza/gestion-poliza.component';
import { ModificarPolizaComponent } from './modificar-poliza/modificar-poliza.component';

export const routes: Routes = [
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    { path: 'clientes', component: ListarClientesComponent },
    { path: 'nuevo-cliente', component: NuevoClienteComponent },
    { path: 'modificar-cliente', component: ModificarClienteComponent },
    { path: 'listar-polizas', component: ListarPolizasComponent },
    { path: 'nueva-poliza', component: NuevaPolizaComponent },
    { path: 'poliza-detalle', component: PolizaClienteComponent },
    { path: 'historial', component: GestionPolizaComponent },
    { path: 'mofificar', component: ModificarPolizaComponent },
];

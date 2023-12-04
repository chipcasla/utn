import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetalleComponent } from './components/cliente-detalle/cliente-detalle.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { ReservaDetalleComponent } from './components/reserva-detalle/reserva-detalle.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { authGuard } from './guards/auth.guard';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MesaManagementComponent } from './components/mesa-management/mesa-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reservas', component: ReservaComponent, canActivate: [authGuard] },
  {
    path: 'reservas/:id',
    component: ReservaDetalleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'misdatos',
    component: ClienteDetalleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'nuevaReserva',
    component: MesaComponent,
    canActivate: [authGuard],
  },

  { path: 'admin', component: MenuAdminComponent},
  { path: 'admin/mesas', component: MesaManagementComponent},
  { path: 'admin/mesas/:action', component: MesaManagementComponent },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
import { ClienteManagementComponent } from './components/cliente-management/cliente-management.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReservaManagementComponent } from './components/reserva-management/reserva-management.component';
import { MenuReseniaComponent } from './components/menu-resenia/menu-resenia.component';
import { ReseniasComponent } from './components/resenias/resenias.component';
import { PlatoManagementComponent } from './components/plato-management/plato-management.component';
import { PlatoComponent } from './components/plato/plato.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { PlatoEditComponent } from './components/plato-edit/plato-edit.component';

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
  { path: 'misdatos/edit', component: ClienteEditComponent},
  
  {
    path: 'nuevaReserva',
    component: MesaComponent,
    canActivate: [authGuard],
  },

  { path: 'resenias', component: MenuReseniaComponent},
  { path: 'resenias/all', component: ReseniasComponent},

  { path: 'registro', component: SignInComponent},

  { path: 'platos', component: PlatoComponent},

  { path: 'admin', component: MenuAdminComponent},
  { path: 'admin/mesas', component: MesaManagementComponent},
  { path: 'admin/clientes', component: ClienteManagementComponent},
  { path: 'admin/reservas', component: ReservaManagementComponent},
  { path: 'admin/platos', component: PlatoManagementComponent},
  { path: 'admin/platos/edit/:id', component: PlatoEditComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { VerPerrosComponent } from './ver-perros/ver-perros.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'ver-usuarios', component: VerUsuariosComponent },
  { path: 'agregar-usuario', component: AgregarUsuarioComponent },
  { path: 'editar-usuario/:id', component: AgregarUsuarioComponent },
  { path: 'ver-mascotas', component: VerPerrosComponent },
  { path: 'agregar-mascotas', component: AgregarMascotaComponent },
  { path: 'editar-mascotas/:id', component: AgregarMascotaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

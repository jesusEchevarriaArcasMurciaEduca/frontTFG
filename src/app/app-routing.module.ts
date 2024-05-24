import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CitaComponent } from './components/cita/cita.component';

//Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'trabajador', component:TrabajadorComponent},
  {path: 'cliente', component:ClienteComponent},
  {path: 'cita', component:CitaComponent},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

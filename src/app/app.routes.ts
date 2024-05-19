import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquiposComponent} from './main/equipos/equipos.component';
import {EmbarcacionesComponent} from './main/embarcaciones/embarcaciones.component';
import {InformationComponent} from './footer/information/information.component';
import {ClasificacionComponent} from './main/clasificacion/clasificacion.component';
import {MainComponent} from './main/main.component'; // Asumiendo que también tienes un componente home

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'equipos', component: EquiposComponent},
  {path: 'embarcaciones', component: EmbarcacionesComponent},
  {path: 'information', component: InformationComponent},
  {path: 'clasificacion', component: ClasificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

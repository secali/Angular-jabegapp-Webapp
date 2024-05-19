import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { MainComponent } from './app/main/main.component';
import { ClasificacionComponent } from './app/main/clasificacion/clasificacion.component';
import { EquiposComponent } from './app/main/equipos/equipos.component';
import { InformationComponent } from './app/footer/information/information.component';
import { EmbarcacionesComponent } from './app/main/embarcaciones/embarcaciones.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'embarcaciones', component: EmbarcacionesComponent },
  { path: 'information', component: InformationComponent },
  { path: 'clasificacion', component: ClasificacionComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});

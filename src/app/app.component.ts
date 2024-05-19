import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";
import {EquiposComponent} from "./main/equipos/equipos.component";
import {EmbarcacionesComponent} from "./main/embarcaciones/embarcaciones.component";
import {InformationComponent} from "./footer/information/information.component";
import {ClasificacionComponent} from "./main/clasificacion/clasificacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, EquiposComponent, EmbarcacionesComponent, InformationComponent, ClasificacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentRoute: string | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}

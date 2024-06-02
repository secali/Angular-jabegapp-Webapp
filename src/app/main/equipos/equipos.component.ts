import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  searchText: string = '';
  criterios = {
    nombre: true,
    club: true,
    ubicacion: true,
    fechaFormacion: true
  };
  selectedEquipo: any = null;

  equipos = [
    { id: 1, nombre: 'Tiburones', club: 'Club de Remo Pedregalejo', ubicacion: 'Málaga', fechaFormacion: '1998', imagen: 'assets/images/equipos/pedregalejo.webp' },
    { id: 2, nombre: 'Viking@s', club: 'Club de Remo La Cala del Moral', ubicacion: 'La Cala del Moral', fechaFormacion: '2002', imagen: 'assets/images/equipos/caladelmoral.webp' },
    { id: 3, nombre: 'Marea Rosa', club: 'Remo Rincón', ubicacion: 'Rincón de la Victoria', fechaFormacion: '2020', imagen: 'assets/images/equipos/rincon.png' },
    { id: 4, nombre: 'La Escuela', club: 'Club Deportivo de Remo Malagueño de Jábega', ubicacion: 'Málaga', fechaFormacion: '2021', imagen: 'assets/images/equipos/remomalagueno.webp' },
    { id: 5, nombre: 'Faro de Torre del Mar', club: 'Club de Remo Faro de Torre del Mar', ubicacion: 'Torre del Mar', fechaFormacion: 'Desconocida', imagen: 'assets/images/equipos/farotorre.jpg' },
    { id: 6, nombre: 'La Carihuela', club: 'Club de Remo La Carihuela', ubicacion: 'Torremolinos', fechaFormacion: '1998', imagen: 'assets/images/equipos/carihuela.jpg' },
    { id: 9, nombre: 'La Espaílla', club: 'Club de Remo La Espaílla', ubicacion: 'Málaga', fechaFormacion: '2007', imagen: 'assets/images/equipos/elpalo.png' },
  ];

  ngOnInit() {
    this.selectedEquipo = this.equipos[0];
  }

  onFiltroCambiado() {
    this.filteredEquipos();
  }

  filteredEquipos() {
    return this.equipos.filter(equipo => {
      return (
        (this.criterios.nombre && equipo.nombre.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (this.criterios.club && equipo.club.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (this.criterios.ubicacion && equipo.ubicacion.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (this.criterios.fechaFormacion && equipo.fechaFormacion.includes(this.searchText))
      );
    });
  }

  selectEquipo(equipo: any) {
    this.selectedEquipo = equipo;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-embarcaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './embarcaciones.component.html',
  styleUrls: ['./embarcaciones.component.css']
})
export class EmbarcacionesComponent {
  searchText: string = '';
  criterios = {
    nombre: true,
    club: true,
    ubicacion: true,
    fechaConstruccion: true
  };
  selectedEmbarcacion: any = null;

  embarcaciones = [
    { id: 1, nombre: 'La Fogonera', tipo: 'Jábega', capacidad: 8, club: 'Club de Remo Faro de Torre del Mar', ubicacion: 'Torre del Mar', fechaConstruccion: '2000-01-01', imagen: 'assets/images/embarcaciones/fogonera.jpg' },
    { id: 2, nombre: 'María Juliana', tipo: 'Jábega', capacidad: 8, club: 'Club de Remo La Cala del Moral', ubicacion: 'La Cala del Moral', fechaConstruccion: '2005-05-15', imagen: 'assets/images/embarcaciones/carmen.jpg' },
    { id: 3, nombre: 'Cordela', tipo: 'Jábega', capacidad: 8, club: 'Club de Remo Pedregalejo', ubicacion: 'Pedregalejo', fechaConstruccion: '2010-07-20', imagen: 'assets/images/embarcaciones/cordela.jpg' },
    { id: 4, nombre: 'Victoria', tipo: 'Jábega', capacidad: 8, club: 'Club de Remo Rincón de la Victoria', ubicacion: 'Rincón de la Victoria', fechaConstruccion: '2015-09-10', imagen: 'assets/images/embarcaciones/victoria.jpg' },
    { id: 5, nombre: 'Carmen y Gloria', tipo: 'Jábega', capacidad: 8, club: 'Club de Remo El Palo', ubicacion: 'El Palo', fechaConstruccion: '2020-11-25', imagen: 'assets/images/embarcaciones/carmenygloria.jpg' }
  ];

  onFiltroCambiado() {
    this.filteredEmbarcaciones();
  }

  ngOnInit() {
    this.selectedEmbarcacion = this.embarcaciones[0];
  }

  filteredEmbarcaciones() {
    return this.embarcaciones.filter(embarcacion => {
      return (
        (this.criterios.nombre && embarcacion.nombre.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (this.criterios.club && embarcacion.club.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (this.criterios.ubicacion && embarcacion.ubicacion.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (this.criterios.fechaConstruccion && embarcacion.fechaConstruccion.includes(this.searchText))
      );
    });
  }

  selectEmbarcacion(embarcacion: any) {
    this.selectedEmbarcacion = embarcacion;
  }
}

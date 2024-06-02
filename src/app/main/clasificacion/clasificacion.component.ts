import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

interface Equipo {
  nombre: string;
  total: number;
  puntuacion: (number | null)[]; // Allow null values to represent empty cells
}

interface Clasificacion {
  categoria: string;
  equipos: Equipo[];
}

@Component({
  selector: 'app-clasificacion',
  imports: [CommonModule, FormsModule],
  templateUrl: './clasificacion.component.html',
  standalone: true,
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent {
  clasificaciones: Clasificacion[] = [
    {
      categoria: 'CADETE MASCULINO',
      equipos: [
        { nombre: 'CLUB DE REMO LA CALA DEL MORAL', total: 10, puntuacion: [10, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO PEDREGALEJO', total: 9, puntuacion: [9, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO FARO DE TORRE DEL MAR', total: 8, puntuacion: [8, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'REMO RINCÓN', total: 7, puntuacion: [7, null, null, null, null, null, null, null, null, null, null, null] }
      ]
    },
    {
      categoria: 'CADETE FEMENINO',
      equipos: [
        { nombre: 'CLUB DE REMO LA CALA DEL MORAL', total: 9, puntuacion: [9, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO PEDREGALEJO', total: 8, puntuacion: [8, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO FARO DE TORRE DEL MAR', total: 7, puntuacion: [7, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'REMO RINCÓN', total: 6, puntuacion: [6, null, null, null, null, null, null, null, null, null, null, null] }
      ]
    },
    {
      categoria: 'JUVENIL MASCULINO',
      equipos: [
        { nombre: 'CLUB DE REMO LA CALA DEL MORAL', total: 10, puntuacion: [10, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO PEDREGALEJO', total: 9, puntuacion: [9, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO FARO DE TORRE DEL MAR', total: 8, puntuacion: [8, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'REMO RINCÓN', total: 7, puntuacion: [7, null, null, null, null, null, null, null, null, null, null, null] }
      ]
    },
    {
      categoria: 'JUVENIL FEMENINO',
      equipos: [
        { nombre: 'CLUB DE REMO LA CALA DEL MORAL', total: 8, puntuacion: [8, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO PEDREGALEJO', total: 7, puntuacion: [7, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO FARO DE TORRE DEL MAR', total: 6, puntuacion: [6, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'REMO RINCÓN', total: 5, puntuacion: [5, null, null, null, null, null, null, null, null, null, null, null] }
      ]
    },
    {
      categoria: 'SENIOR MASCULINO',
      equipos: [
        { nombre: 'CLUB DE REMO LA CALA DEL MORAL', total: 7, puntuacion: [7, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO PEDREGALEJO', total: 6, puntuacion: [6, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO FARO DE TORRE DEL MAR', total: 5, puntuacion: [5, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'REMO RINCÓN', total: 4, puntuacion: [4, null, null, null, null, null, null, null, null, null, null, null] }
      ]
    },
    {
      categoria: 'SENIOR FEMENINO',
      equipos: [
        { nombre: 'CLUB DE REMO LA CALA DEL MORAL', total: 6, puntuacion: [6, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO PEDREGALEJO', total: 5, puntuacion: [5, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'CLUB DE REMO FARO DE TORRE DEL MAR', total: 4, puntuacion: [4, null, null, null, null, null, null, null, null, null, null, null] },
        { nombre: 'REMO RINCÓN', total: 3, puntuacion: [3, null, null, null, null, null, null, null, null, null, null, null] }
      ]
    }
  ];

  filteredClasificaciones: Clasificacion[] = this.clasificaciones;
  selectedCategories: string[] = [];

  filterClasificaciones() {
    if (this.selectedCategories.length === 0) {
      this.filteredClasificaciones = this.clasificaciones;
    } else {
      this.filteredClasificaciones = this.clasificaciones.filter(clasificacion =>
        this.selectedCategories.includes(clasificacion.categoria)
      );
    }
  }

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterClasificaciones();
  }

  headers = ['Benagalbón', 'Pedregalejo', 'Huelin', 'Benalmádena', 'Carihuela', 'La Cala', 'Rincón', 'El Palo', 'La Araña', 'Torremolinos', 'Málaga', 'Torre del Mar'];
}

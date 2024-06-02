import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  images: string[] = [
    'assets/images/carrusel/carrusel1.jpg',
    'assets/images/carrusel/carrusel2.jpg',
    'assets/images/carrusel/carrusel3.jpg',
    'assets/images/carrusel/carrusel4.webp',
    'assets/images/carrusel/carrusel5.webp'
  ];
  activeImageIndex: number = 0;

  requestInfo() {
    window.location.href = 'mailto:info@example.com?subject=Solicitud de información';
  }

  nextImage() {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.activeImageIndex = (this.activeImageIndex - 1 + this.images.length) % this.images.length;
  }
}

import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'TecnoStore';
  encargado: string = 'Natali Lisbet Sirpa Calderon';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = false;

  categorias: string[] = [
    'Celulares',
    'Computadoras',
    'Audífonos',
    'Accesorios'
  ];

  producto: Producto = {
    nombre: 'Teclado Gamer RGB',
    precio: 280,
    disponible: false
  };
}

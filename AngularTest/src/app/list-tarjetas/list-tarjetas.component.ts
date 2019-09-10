import { Component, OnInit } from '@angular/core';
import { ITarjeta } from './iTarjeta';

@Component({
  selector: 'app-list-tarjetas',
  templateUrl: './list-tarjetas.component.html',
  styleUrls: ['./list-tarjetas.component.css']
})
export class ListTarjetasComponent implements OnInit {
  constructor() { }

  ArregloTarjetas: ITarjeta[] = [
    {
      titulo: 'Analisis', completa: true, color: '#cfcccc',
      asignaciones: [
        { texto: 'Levantamiento Requerimiento', completada: true },
        { texto: 'Contrucción documento', completada: true }
      ]
    },
    {
      titulo: 'Diseño', completa: true, color: '#dfa9a9',
      asignaciones: [
        { texto: 'Lectura del documento', completada: false },
        { texto: 'Construcción Diseño', completada: false },
        { texto: 'Actualizar Requermiento', completada: false }
      ]
    },
    {
      titulo: 'Contrucción', completa: true, color: '#9bc3e9',
      asignaciones: [
        { texto: 'Lectura requerimiento', completada: false },
        { texto: 'Contrucción de la solución', completada: false },
        { texto: 'Pruebas unitarias', completada: false },
        { texto: 'Entrega a Calidad', completada: false }
      ]
    },
    {
      titulo: 'Pruebas', completa: true, color: '#6cf0b2',
      asignaciones: [
        { texto: 'Lecturas Casos de prueba', completada: false },
        { texto: 'Ejecución Casos de prueba', completada: false },
        { texto: 'Registro Hallazgos', completada: false },
        { texto: 'libreación a Aceptación', completada: false }
      ]
    },
    {
      titulo: 'Liberación', completa: true, color: '#e9f364',
      asignaciones: [
        { texto: 'Aceptación Cliente', completada: false },
        { texto: 'Liberación Producción', completada: false }
      ]
    }
  ];
  ngOnInit() { }

  TareasCompletas(evento) {
    console.log(evento);

  }
}

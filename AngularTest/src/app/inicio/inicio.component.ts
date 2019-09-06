import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  metas: IMeta[];
  titulo: string = 'Diario';
  constructor() { }
  ngOnInit() {
    this.metas = this.getMetas();
  }
  getMetas(): IMeta[] {
    return [{
      id: 1,
      title: "Terminar Sprint anterior",
      description: "Pendiente validación de pruebas"
    }, {
      id: 2,
      title: "Realizar el frontend componente home css",
      description: "Contrucción de estilos"
    }, {
      id: 3,
      title: "Realizar el frontend componente home html",
      description: "Construcción del template"
    }
    ]
  }
}

interface IMeta {
  id: number;
  title: string;
  description?: string;
}

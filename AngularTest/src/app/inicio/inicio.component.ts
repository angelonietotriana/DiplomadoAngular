import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  titulo = 'Haciendo Angular' ;
  toolTip = 'Haciendo Click';
  usuario = "Angelo";

  constructor() { }

  ngOnInit() { }

  Mensaje() {
    alert("Probando mensaje");

  }

}

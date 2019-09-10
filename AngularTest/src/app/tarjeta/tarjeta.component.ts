import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITarjeta } from '../list-tarjetas/iTarjeta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  constructor() { }

  @Input() tarjeta: ITarjeta;
  @Output() tareaCompleta = new EventEmitter<ITarjeta>();

  ngOnInit() {
  }

  SetCompletada(evento, tarjeta) {
    console.log(evento);

    if (evento.checked) {
      this.tareaCompleta.emit(tarjeta);
    }
  }


}

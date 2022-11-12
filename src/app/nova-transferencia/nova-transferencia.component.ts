import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class novaTransferenciaComponet {

  valor: number = 12;
  destino: number = 222;

  transferir() {
    console.log('Solicitada nova transferência');
    console.log('valor: ', this.valor);
    console.log('destino: ', this.destino);
  }
}

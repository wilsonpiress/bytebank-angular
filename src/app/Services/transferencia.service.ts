import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  transferencias: any[] = [];

constructor() {
  this.listaTransferencia = [];
 }
 
get transferencia() {
  return this.listaTransferencia;
}

adicionar(transferencia: any) {
  this.hidratar(transferencia);

  this.listaTransferencia.push(transferencia);
}

private hidratar(transferencia: any) {
  transferencia.data = new Date();
}

}

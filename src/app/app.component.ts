import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'three-buttons';
  textoAzul!:string;
  textoRojo!:string;
  textoVerde!:string;
  textoDisable = 'este botón no funciona ahora';
  textoEnable = ['Saludar','Desactivar','Clica aquí para Activar'];
  disable = true;

  // textoBotones = {
  //   botonVerde: {enable:'Clica aquí para Activar',disable:''},
  //   botonRojo:  {enable:'Desactivar',disable:''},
  //   botonAzul:  {enable:'Saludar',disable:''}
  // }
  constructor(){
    this.textoRojo = this.textoAzul = this.textoDisable;
    this.textoVerde = this.textoEnable[2];

  }
saludar(){
  alert('HOLA CRACK');
}
buttonDisable(){
  this.disable = !this.disable;

}
accionBotonVerde(){
  this.buttonDisable();
  this.textoVerde = this.textoDisable;
  this.textoAzul = this.textoEnable[0];
  this.textoRojo = this.textoEnable[1];
}

accionBotonRojo(){
  this.buttonDisable();
  this.textoRojo = this.textoDisable;
  this.textoVerde = this.textoEnable[2];
  this.textoAzul = this.textoDisable;

}
}

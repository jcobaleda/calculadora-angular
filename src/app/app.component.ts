import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación de Calculadora';
  A: number = 0;
  B: number = 0;
  suma: number = 0;

  sumarDatos():number{
    return this.suma = this.A+this.B;
  }
}

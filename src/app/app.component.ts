import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  visor = '';
  operacoesExecutadas: string[] = [];

  insereOperadorNumero(operador: string) {
    this.visor += operador;
  }

  resetaCalculadora() {
    this.visor = '';
  }

  resultado() {
    if (!this.visor) {
      this.visor = '0';
    }
    let resultado = eval(this.visor);

    if (this.isFloat(resultado)) {
      resultado = Number(resultado).toFixed(2);
    }

    const operacao = this.visor + " = " + resultado;
    this.operacoesExecutadas.push(operacao);
    this.visor = resultado;
  }

  isFloat(x: any) {
    if (!isNaN(x)) {
      return parseInt(x) != parseFloat(x);
    }

    return false;
  }

}

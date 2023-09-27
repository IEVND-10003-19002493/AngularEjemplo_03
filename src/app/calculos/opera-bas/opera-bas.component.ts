import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion:string='';

  calculadora():void{
    if(this.operacion=='sumar')
    this.resultado=parseInt(this.num1)+ parseInt(this.num2);

    else if(this.operacion=='restar')
    this.resultado=parseInt(this.num1)- parseInt(this.num2);

    else if(this.operacion=='multiplicar')
    this.resultado=parseInt(this.num1)* parseInt(this.num2);

    else if(this.operacion=='dividir')
    this.resultado=parseInt(this.num1)/ parseInt(this.num2);
  }
}

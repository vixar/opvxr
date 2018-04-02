import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('terminó!', mensaje)
    )
    .catch(
      error => console.log('error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

return new Promise( (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        console.log( contador );

        if (contador === 3) {
          resolve( true );
          // para parar el conteo
          clearInterval(intervalo);
        }
      }, 1000);
    });

  }

}

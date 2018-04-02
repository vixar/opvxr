import { Component, OnInit, OnDestroy } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'RxJs/Rx';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {


      this.subscription = this.regresaObservable().subscribe (
        numero => console.log('Subs', numero),
        error => console.log('Error en el obs 9(2veces)', error ),
        () => console.log('El observador terminó!' )

      );



  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {

          contador += 1;

          let salida = {
            valor: contador
          };

          observer.next( salida );

          // if ( contador === 3 ) {
          //   clearInterval( intervalo );
          //   observer.complete();
          // }

          // if ( contador === 2) {
          //   observer.error(': auxilio');

          // }

      },500);

    })
    .retry(2)
    .map((res:any) => {
      return res.valor;
    })
    .filter( valor => {

      if (valor % 2 === 1 ) {
        // imp
        return true;
      } else {
        // par
        return false;
      }

    });


  }

}

import { Component } from '@angular/core';

import { SettingsService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // inyectando el servicio creado '_ajustes' a la pagina principal
  constructor ( public _ajustes: SettingsService ) {}
}

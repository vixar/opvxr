import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';

// ng2- charts
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// temporal
import { IncrementardorComponent } from './../components/incrementardor/incrementardor.component';
import { SharedModule } from '../shared/shared.module';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { GraficoPieComponent } from '../components/grafico-pie/grafico-pie.component';
import { GraficoBarraComponent } from '../components/grafico-barra/grafico-barra.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementardorComponent,
        GraficoDonaComponent,
        GraficoPieComponent,
        GraficoBarraComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule

    ]
})

export class PagesModule { }

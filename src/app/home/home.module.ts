import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { RecursoComponent } from '../recurso/recurso.component';
import { VideoComponent } from '../video/video.component';
import { NumerosComponent } from '../numeros/numeros.component';
import { DownloadComponent } from '../download/download.component';
import { ServicoComponent } from '../servico/servico.component';
import { SectionDownloadComponent } from '../section-download/section-download.component';
import { LocalComponent } from '../local/local.component';
import { ContatoComponent } from '../contato/contato.component';


@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    QuemSomosComponent,
    RecursoComponent,
    VideoComponent,
    NumerosComponent,
    DownloadComponent,
    ServicoComponent,
    SectionDownloadComponent,
    LocalComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeModule } from './home/home.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { RecursoComponent } from './recurso/recurso.component';
import { VideoComponent } from './video/video.component';
import { NumerosComponent } from './numeros/numeros.component';
import { DownloadComponent } from './download/download.component';
import { ServicoComponent } from './servico/servico.component';
import { SectionDownloadComponent } from './section-download/section-download.component';
import { LocalComponent } from './local/local.component';
import { ContatoComponent } from './contato/contato.component';
import { ModalDownloadComponent } from './modal-download/modal-download.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

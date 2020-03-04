import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubeRoutingModule } from './clube-routing.module';
import { ClubeComponent } from './clube/clube.component';


@NgModule({
  declarations: [ClubeComponent],
  imports: [
    CommonModule,
    ClubeRoutingModule
  ]
})
export class ClubeModule { }

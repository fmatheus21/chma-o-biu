import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubeComponent } from './clube/clube.component';


const routes: Routes = [
  { path: '', component: ClubeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubeRoutingModule { }

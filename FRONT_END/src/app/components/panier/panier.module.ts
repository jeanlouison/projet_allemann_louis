import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier.component';
import { SharedModule } from '../../shared-module/shared-module.module';


const routes: Routes = [
  { path: '', component: PanierComponent }
];

@NgModule({
  declarations: [
    PanierComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
  ]
})
export class PanierModule { }

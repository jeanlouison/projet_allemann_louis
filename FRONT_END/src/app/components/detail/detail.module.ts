import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../../shared-module/shared-module.module';


const routes: Routes = [
  { path: '', component: DetailComponent }
];

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ]
})
export class DetailModule { }

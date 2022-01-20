import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CatalogComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CatalogModule { }

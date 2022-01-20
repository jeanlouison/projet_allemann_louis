import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { SharedModule } from '../../shared-module/shared-module.module';
import { RecapComponent } from '../recap/recap.component';
import { ValidateDirective } from '../../validate.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdresseComponent } from '../adresse/adresse.component';


const routes: Routes = [
  { path: '', component: FormComponent }
];

@NgModule({
  declarations: [
    FormComponent,
    RecapComponent,
    // ValidateDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
  ]
})
export class FormModule { }

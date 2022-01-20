import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdresseComponent } from './adresse.component';
import { SharedModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AddressState } from 'src/shared/states/address-state';


const routes: Routes = [
  { path: '', component: AdresseComponent }
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
    NgxsModule.forFeature([AddressState]),
  ]
})
export class AdresseModule { }

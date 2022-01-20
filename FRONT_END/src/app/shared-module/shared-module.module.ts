import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrixPipe } from '../prix.pipe';
import { TelephonePipe } from '../pipes/telephone';
import { ShopDataService } from '../shop-data.service';
import { ValidateDirective } from '../validate.directive';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrixPipe,
    TelephonePipe,
    ValidateDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PrixPipe,
    TelephonePipe,
    FormsModule,
    ReactiveFormsModule,
    ValidateDirective,
  ]
})

export class SharedModule{
  static forRoot() {
      return {
          ngModule: SharedModule,
          providers: [
            PrixPipe,
            TelephonePipe,
            ShopDataService,
            ValidateDirective,
          ]
      }
  }
}
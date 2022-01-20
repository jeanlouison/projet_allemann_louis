import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'telephone'})
export class TelephonePipe implements PipeTransform {
    resTelephone: string = ';'
    transform(value: string): string {
      if (value.length == 10) {
        this.resTelephone = value.slice(1, 9);
        this.resTelephone = '0033' + this.resTelephone;
      }
    return this.resTelephone;
  }
}
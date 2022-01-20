import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prix'
})
export class PrixPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 0) {
      return 'Gratuit';
    } else  if (value > 0){
      return value + '€';
    } 
    else {
      return value.toString();
    }
  }

}
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {

  @Input()
  appValidate: FormGroup = new FormGroup({foo: new FormControl()});

  constructor(private element: ElementRef) {}

  @HostListener('change')

  onChange() {
    
    let control: AbstractControl = this.appValidate.get(this.element.nativeElement.name) ?? new FormControl();

    if (control != null && control.errors != null) {

      // Si le composant a des règles de contenu, comme un pattern
      // a respecter, cela le rend indirectement obligatoire
      // (vide = pattern non respecté). S'il n'est pas obligatoire
      // ne fait les contrôles que s'il est rempli.
      if (! Object.prototype.hasOwnProperty.call(control.errors, 'required')
          && this.element.nativeElement.value.length > 0) {
        
        for (const key in control.errors) {
          if (Object.prototype.hasOwnProperty.call(control.errors, key)) {

            this.element.nativeElement.style.backgroundColor = 'DarkSalmon';
          }
        }
      }
      else {
        this.element.nativeElement.style.backgroundColor = 'DarkSalmon';
      }
    }
    else {
      this.element.nativeElement.style.backgroundColor = 'white';
    }
  }

}

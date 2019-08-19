import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appValidaNome]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidaNomeDirective, multi: true }
  ]
})
export class ValidaNomeDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    try {
      if (control.value.match(/^[A-Za-zÀ-ÖØ-öø-ÿ \\s-]*$/i) == null && control.value) { return { appValidaNome: true }; }
      return null;
    }
    catch(e) {
      return null;
    }
  }
}

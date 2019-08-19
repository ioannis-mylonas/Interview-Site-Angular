import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber';

@Directive({
  selector: '[appValidaFone]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidaFoneDirective, multi: true }
  ]
})
export class ValidaFoneDirective {
  phoneNumberUtil = PhoneNumberUtil.getInstance();

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    try {
      if (control.value.match(/^[0-9()\\s -]*$/i) == null && control.value) { return { appValidaFone: true }; }
      var numero = this.phoneNumberUtil.parse(control.value, "BR");
      const valid = this.phoneNumberUtil.isValidNumber(numero);
      return valid ? null : { appValidaFone: true };
    }
    catch (e) {
      return null;
    }
  }
}

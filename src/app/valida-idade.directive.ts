import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appValidaIdade]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidaIdadeDirective, multi: true }
  ]
})
export class ValidaIdadeDirective {
  idadeMinima: number = 18;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    try {
      if(control.value == null) { return null; }
      var nascimento = new Date(control.value);
      var atual = new Date();
      var idade = atual.getFullYear() - nascimento.getFullYear()
      return idade > this.idadeMinima ? null : { appValidaIdade: true };
    }
    catch (e) {
      return { appValidaIdade: true };
    }
  }
}

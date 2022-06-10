import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function noOne(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const noOne = control.value?.includes('1');
    return noOne ? null : { noOne: { value: control.value } };
  };
}

@Directive({
  selector: '[noOne]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoOneValidatorDirective,
      multi: true,
    },
  ],
})
export class NoOneValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return noOne()(control);
  }
}

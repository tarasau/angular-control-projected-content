import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validDate = (/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/).test(control.value);
    return validDate ? null : { dateValidator: { value: control.value } };
  };
}

@Directive({
  selector: '[dateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return dateValidator()(control);
  }
}

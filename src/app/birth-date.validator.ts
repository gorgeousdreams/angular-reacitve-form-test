import { AbstractControl } from '@angular/forms';

export function BirthDateValidator(control: AbstractControl) {
  if (
    control.value == null ||
    control.value === ''
  ) {
    return { required: true };
  }
  let year = new Date(control.value).getFullYear();
  let today = new Date().getFullYear();
  if (today - year > 18){
    return null;
  }
  return { invalidDate: true };
}

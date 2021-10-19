import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(): ValidatorFn {  
  return (confirmPassword: AbstractControl): { [key: string]: boolean } | null => {
    const controlValue = confirmPassword.value;
    const passwordValue = confirmPassword.parent.get('password').value;
    return controlValue === passwordValue ? null : { passwordNotMach: true }
  }
}
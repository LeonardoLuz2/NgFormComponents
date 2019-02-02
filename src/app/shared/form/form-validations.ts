import { FormGroup, AbstractControl } from '@angular/forms';

export class FormValidations {

  constructor() { }

  static minimumDate(minimum: string) {
    const validator = (control: AbstractControl) => {

      if (control.value < minimum) {
        return { minDate : minimum };
      }

      return null;
    };
    return validator;
  }

  static maximumDate(maximum: string) {
    const validator = (control: AbstractControl) => {

      if (control.value > maximum) {
        return { maxDate : maximum };
      }

      return null;
    };
    return validator;
  }

  static equalsTo(otherField: string) {
    const validator = (control: AbstractControl) => {
      const field = (<FormGroup>control.root).get(otherField);

      if (field.value !== control.value) {
        return { equalsTo : otherField };
      }

      return null;
    };
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'equalsTo': 'Dados diferentes.',
      'pattern': 'Campo inválido',
      'email': 'E-mail inválido.',
      'minDate': `Data inferior ao permitido.`,
      'maxDate': 'Data superior ao permitido.'
    };

    return config[validatorName];
  }

}

import { OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

export abstract class FormBaseComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit();

  onSubmit() {
    if (this.form.valid) {
      return this.submit();
    }
    this.validateFormGroup(this.form);
  }

  validateFormGroup(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((fieldName: string) => {
      const control = formGroup.get(fieldName);
      control.markAsDirty();
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateFormGroup(control);
      }
    });
  }

  disableForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((fieldName: string) => {
      const control = formGroup.get(fieldName);
      control.disable();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.disableForm(control);
      }
    });
  }

  validateTouched(campo: string) {
    return (
      !this.form.get(campo).valid &&
      (this.form.get(campo).touched || this.form.get(campo).dirty)
    );
  }

  cssErrors(campo: string) {
    return {
      'is-invalid': this.validateTouched(campo),
    };
  }

  onReset() {
    this.form.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../shared/form/form-base/form-base.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidations } from '../shared/form/form-validations';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends FormBaseComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder, private datePipe: DatePipe) { super() }

  ngOnInit() {
    const dateNow = this.datePipe.transform(Date.now(), "yyyy-MM-dd");

    this.form = this.builder.group({
      nome: [null, [Validators.minLength(5), Validators.maxLength(50), Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      dataNascimento: [null, 
        [Validators.required, FormValidations.minimumDate('1900-01-01'), FormValidations.maximumDate(dateNow)]]
    });
  }

  submit() {

  }

}

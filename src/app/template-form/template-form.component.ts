import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {

  @ViewChild('form', { static: false }) form: NgForm;

  formModel: any = {
    degree: "NONE",
    firstName: null,
    lastName: null,
    email: null,
    address: {
      zipCode: null,
      city: null
    },
    confirm: null,
    //random: null
  };

  constructor() { }

  isInvalid(ngModel: NgModel): boolean {
    return !ngModel.valid && ngModel.touched;
  }

  onSubmit() {
    this.form.reset();
  }
}

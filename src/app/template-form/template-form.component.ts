import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {

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

  ngOnInit() { }

  onSubmit() {
    this.form.reset();
  }
}

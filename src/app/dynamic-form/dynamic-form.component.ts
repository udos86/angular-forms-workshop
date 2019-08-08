import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from "@angular/forms";
import { DynamicFormControlModel, DynamicFormService, DynamicFormLayout } from "@ng-dynamic-forms/core";
import { FORM_MODEL } from './dynamic-form.model';
import { FORM_LAYOUT } from './dynamic-form.layout';
import { customAsyncFormGroupValidator } from '../validation/validators/custom-async-form-group.validator';

@Component({
  selector: 'dynamic-forms',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  formModel: DynamicFormControlModel[] = FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = FORM_LAYOUT;

  constructor(private httpClient: HttpClient, private formService: DynamicFormService) { }

  ngOnInit() {

   this.formModel = this.formService.fromJSON(this.formModel);
   this.formGroup = this.formService.createFormGroup(this.formModel);

    /*
    this.httpClient.get<object[]>('./app/dynamic-form/dynamic-form.model.json').subscribe(formModelJson => {
      this.formModel = this.formService.fromJSON(formModelJson);
      this.formGroup = this.formService.createFormGroup(this.formModel, { asyncValidators: customAsyncFormGroupValidator });
    });
    */
  }

  onSubmit() {
    this.formGroup.reset();
  }
}

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html'
})
export class ValidationMessageComponent implements OnInit {

  @HostBinding('class.valid-feedback') get valid() { return this.control.valid };
  @HostBinding('class.invalid-feedback') get invalid() { return this.control.invalid };

  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() { }
}

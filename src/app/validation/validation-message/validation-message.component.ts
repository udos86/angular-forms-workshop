import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { feedbackAnimations } from 'src/app/animations';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
  animations: [feedbackAnimations]
})
export class ValidationMessageComponent implements OnInit {

  @HostBinding('@feedbackAnimations') feedbackAnimations = true;
  @HostBinding('class.invalid-feedback') get invalid() { return this.control.invalid };

  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() { }
}

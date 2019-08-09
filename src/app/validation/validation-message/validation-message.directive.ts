import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationMessageComponent } from './validation-message.component';
import { Subscription, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[validationMessage]'
})
export class ValidationMessageDirective implements OnInit, OnDestroy {

  @Input('validationMessage') control: AbstractControl;

  componentFactory: ComponentFactory<ValidationMessageComponent>;
  componentRef: ComponentRef<ValidationMessageComponent>;
  componentInstance: ValidationMessageComponent;

  valueChangesSubscription: Subscription;
  firstHostBlurSubscription: Subscription;

  /* Less efficient than from event
  @HostListener('blur') onHostBlur() {
    if (this.create) {
      this.createComponent();
    }
  }*/

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver, private readonly viewContainerRef: ViewContainerRef, private readonly elementRef: ElementRef) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(ValidationMessageComponent);
  }

  ngOnInit() {
    this.valueChangesSubscription = this.control.valueChanges.subscribe(value => this.onValueChanged(value));
    this.firstHostBlurSubscription = fromEvent(this.elementRef.nativeElement, 'blur').pipe(take(1)).subscribe(() => this.onFirstHostBlur());
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
    this.firstHostBlurSubscription.unsubscribe();
  }

  get create(): boolean {
    return !this.componentRef && this.control.invalid && this.control.touched;
  }

  get destroy(): boolean {
    return this.componentRef && this.control.valid;
  }

  onFirstHostBlur() {
    if (this.create) {
      this.createComponent();
    }
  }

  onValueChanged(_value: any) {
    if (this.destroy) {
      this.destroyComponent();
    } else if (this.create) {
      this.createComponent();
    }
  }

  createComponent() {
    this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);
    this.componentInstance = this.componentRef.instance as ValidationMessageComponent;
    this.componentInstance.control = this.control;
  }

  destroyComponent() {
    this.componentRef.destroy();

    this.componentInstance.control = null;
    this.componentInstance = null;
    this.componentRef = null;
  }
}

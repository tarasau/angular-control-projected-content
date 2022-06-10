import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList, } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ValidationComponent } from '../validation/validation.component';

@Component({
  selector: 'ax-control',
  templateUrl: './ax-control.component.html',
})
export class AxControlComponent implements AfterContentInit {
  @Input() title!: string;

  @ContentChild(NgModel) model!: NgModel;
  @ContentChildren(ValidationComponent) messages!: QueryList<ValidationComponent>;

  constructor() {}

  ngAfterContentInit() {
    this.messages.forEach((message) => (message.control = this.model.control));
  }
}

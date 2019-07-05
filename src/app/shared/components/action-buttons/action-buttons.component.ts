import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {

  @Input('index') i: number;
  @Input('element') element;
  @Input('isAdmin') isAdmin: number;
  @Output('delete') deleteEmiter = new EventEmitter<any>();
  @Output('edit') editEmiter = new EventEmitter<{index: number, element: any}>();
  @Output('save') saveEmiter = new EventEmitter<{index: number, element: any}>();
  @Output('cancel') cancelEmiter = new EventEmitter<number>();

  isEdit = -1;
  constructor() {
  }

  delete() {
    this.deleteEmiter.emit(this.element);
  }
  edit() {
    this.isEdit = this.i;
    this.editEmiter.emit({index: this.i, element: this.element});
  }

  save() {
    this.saveEmiter.emit( {index: this.i, element: this.element});
    this.isEdit = -1;
  }

  cancel() {
    this.cancelEmiter.emit(this.element);
    this.isEdit = -1;
  }

}

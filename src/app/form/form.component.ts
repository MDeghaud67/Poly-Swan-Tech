import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() newFnEvent = new EventEmitter<string>();
  @Output() newLnEvent = new EventEmitter<string>();
  firstName: string = '';
  lastName: string = '';
  constructor() {}
  /*addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }*/
  ngOnInit() {}
  onDispFirstName(value: string) {
    //this.firstName.push(newItem);
    //console.log(this.firstName);
    this.newFnEvent.emit(value);
  }
  onDispLastName(value: string) {
    this.newLnEvent.emit(value);
    //this.lastName.push(this.form.lastName);
    //console.log(this.lastName);
  }
}

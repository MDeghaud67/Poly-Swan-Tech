import { Component, VERSION } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  firstName = [];
  lastName = [];
  form: FormComponent = new FormComponent();
  onDispFirstName() {
    //this.firstName.push(this.form.firstName);
    console.log(this.form.firstName);
  }
  onDispLastName() {
    //this.lastName.push(this.form.lastName);
    console.log(this.form.lastName);
  }
}

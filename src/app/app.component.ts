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
  onDispFirstName(fn: string) {
    this.firstName.push(fn);
    console.log('Prénom: ', this.firstName);
  }
  onDispLastName(ln: string) {
    this.lastName.push(ln);
    console.log('Nom: ', this.lastName);
  }
}

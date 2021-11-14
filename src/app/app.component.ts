import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reactive-form-test';

  editForm: FormGroup;
  submitted = false;

  get persons() {
    return this.editForm.get('persons') as FormArray;
  }

  get personControls() {
    return (this.editForm.get('persons') as FormArray).controls;
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      persons: this.fb.array([])
    });
  }

  addPerson() {
    this.persons.push(this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      birth: ['', Validators.required]
    }));
  }

  removePerson(index: number) {
    this.persons.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
  }

  isInvalidInput(ctrl: AbstractControl, fieldName: string) {
    return ctrl.get(fieldName)?.invalid && (ctrl.get(fieldName)?.dirty || ctrl.get(fieldName)?.touched);
  }

  keyPressAlphaNumeric(event: any) {
    const inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}

# Angular Reactive Form Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Requirement

Create a dynamic form using the Reactive forms of Angular

1. Title(Dropdown) with at least 3 options like Mr., Mrs., Miss

2. Name(text) should accept only alphanumeric

3. Birthdate(Calendar) should be greater than 18 years

Notes:

A. All fields are required.

B. When the user clicks on the Add button, the New group should be appended at the bottom with all the above 3 controls.

C. Add Button should be visible only on the last group

D. Users should be allowed to add up to N number of groups.

E. When the user clicks on the delete button, only that group data should be deleted.

F. Each group’s control should show a proper validation message below the control

G. Submit button should be visible only on the last group and should be enabled only if there are no errors in any group.

H. When the user clicks on submit button, Show All the group data in JSON format at the bottom

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

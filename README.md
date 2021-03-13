# Otro codigo ejemplo :
### app.components.ts
```
//app.components.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Experiencia Laboral';
  formulario: FormGroup;
  
  get experienciaLaboral(): FormArray {
    return this.formulario.get('experienciaLaboral') as FormArray;
  }
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.crearFormulario();
    this.anadirExperienciaLaboral();
  }
  
  crearFormulario() {
   this.formulario = this.fb.group({
     experienciaLaboral: this.fb.array([])
   });
  }
  
  anadirExperienciaLaboral() {
    const trabajo = this.fb.group({
      empresa: new FormControl(''),
      puesto: new FormControl(''),
      descripcion: new FormControl('')
    });
    
    this.experienciaLaboral.push(trabajo);
  }

  borrarTrabajo(indice: number) {
    this.experienciaLaboral.removeAt(indice);
  }
}
```
### app.components.html
```
<form [formGroup]="formulario">
  <h3>
    Experiencia Laboral:
  </h3>
  <div formArrayName="experienciaLaboral">
    <div *ngFor="let trabajo of experienciaLaboral.controls; let i = index;">
      <div>
        <label>Empresa:</label><br />
        <input type="text" />
      </div>
      <div>
        <label>Puesto:</label><br />
        <input type="text" />
      </div>
      <div>
        <label>Descripción:</label><br />
        <textarea></textarea>
      </div>
      <div>
        <button (click)="borrarTrabajo(i)">Borrar</button>
      </div>
      <hr />
    </div>
  </div>
  <button (click)="anadirExperienciaLaboral()">
    + Añadir
  </button>
</form>
```


# DynamicRow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

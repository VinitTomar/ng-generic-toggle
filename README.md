# NgGenericToggle

Use of `NgGenericToggle` is to provide a way for frontend developers to simulate the behaviour of toggle, like we have slide toggle.

To use `NgGenericToogle` we have to provide both checked and unchecked state HTML.

`NgGenericToggle` is fully compatible with Angular Reactive and Template drivend forms.

## Installation

npm install --save ng-generic-toggle

For Angular 10 use version 2.0.x

## Usage

1. Import `NgGenericToggleModule` in the component module where we want to use generict toggle.
```
  import { NgGenericToggleModule } from 'ng-generic-toggle';

  @NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgGenericToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
```

2. Use `ng-generic-toggle` tag in html and provide both checked and unchecked state html inside this tab. `*gtCheckedState` directive is use for checked state and `*gtUnCheckedState` directive is used for unchecked state.

```
<ng-generic-toggle [(ngModel)]="val">
  <span *gtCheckedState>
    Generic Toogle: {{chkName}}
  </span>
  <span *gtUnCheckedState>
    Generic Toogle: {{unchkName}}
  </span>
</ng-generic-toggle>
```

  With Reactive From :-

```
<ng-generic-toggle [formControl]="toggleFormControl">
  <div *gtCheckedState class="checked-circle"></div>
  <div *gtUnCheckedState class="unchecked-circle"></div>
</ng-generic-toggle>
```

## Example
Here is the [Demo](https://stackblitz.com/edit/ng-generic-toggle?file=src/app/app.component.ts)



### Please have a look on these also
1. [NgGenericRadio](https://www.npmjs.com/package/ng-generic-radio)
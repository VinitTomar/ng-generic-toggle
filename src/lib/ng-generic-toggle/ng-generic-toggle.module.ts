import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgGenericToggleComponent } from './components/ng-generic-toggle.component';
import { CheckedStateDirective } from './directives/checked-state.directive';
import { UnCheckedStateDirective } from './directives/un-checked-state.directive';

@NgModule({
  declarations: [
    NgGenericToggleComponent,
    CheckedStateDirective,
    UnCheckedStateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgGenericToggleComponent,
    CheckedStateDirective,
    UnCheckedStateDirective
  ]
})
export class NgGenericToggleModule { }

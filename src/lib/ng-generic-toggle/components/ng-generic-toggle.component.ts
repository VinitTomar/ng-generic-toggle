import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, ChangeDetectorRef, Input, ViewContainerRef, ContentChild, TemplateRef, ViewChild, AfterContentInit, AfterViewInit, EmbeddedViewRef, OnChanges, DoCheck } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CanDisable } from '@angular/material/core';
import { CheckedStateDirective } from '../directives/checked-state.directive';
import { UnCheckedStateDirective } from '../directives/un-checked-state.directive';



@Component({
  selector: 'ng-generic-toggle',
  templateUrl: './ng-generic-toggle.component.html',
  styleUrls: ['./ng-generic-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgGenericToggleComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.tabindex]': 'disabled ? null : -1',
    '(click)': 'toggle();',
    '[id]': 'uniqueId',
    '[class.generic-toggle-disabled]': 'disabled'
  }
})
export class NgGenericToggleComponent implements ControlValueAccessor, CanDisable, AfterViewInit {

  static nextUniqueId: number = 0;
  isChecked = false;

  onChange = (_: any) => { }
  onTouched = () => { }

  private isDisabled = false;

  @Input('disabled')
  get disabled() {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.isDisabled = value != null && `${value}` !== 'false'
  }

  @Input('id')
  uniqueId = `generic-toggle-${++NgGenericToggleComponent.nextUniqueId}`;

  @ContentChild(CheckedStateDirective, { static: true, read: CheckedStateDirective })
  private _checkedState: CheckedStateDirective;

  @ContentChild(UnCheckedStateDirective, { static: true, read: UnCheckedStateDirective })
  private _unCheckedState: UnCheckedStateDirective;

  @ViewChild('vc', { static: true, read: ViewContainerRef })
  private _viewContainerRef: ViewContainerRef;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }


  ngAfterViewInit() {
    this.updateView();
    this._changeDetectorRef.detectChanges();
  }

  updateView() {
    this._viewContainerRef.detach();
    if (this.isChecked) {
      this._viewContainerRef.insert(this._checkedState.viewRef);
    } else {
      this._viewContainerRef.insert(this._unCheckedState.viewRef);
    }

    this._changeDetectorRef.markForCheck();
  }

  toggle() {
    if (this.disabled)
      return;
    this.isChecked = !this.isChecked;

    this.updateView();

    this.onChange(this.isChecked);
  }

  writeValue(obj: any): void {
    this.isChecked = !!obj;

    if (!!this._unCheckedState.viewRef && !!this._checkedState.viewRef)
      this.updateView();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }

}

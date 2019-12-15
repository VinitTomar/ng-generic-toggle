import { Directive, ViewRef, TemplateRef, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[gtCheckedState]'
})
export class CheckedStateDirective {

  private _viewRef: EmbeddedViewRef<any>;

  constructor(private _templateRef: TemplateRef<any>) {
    this._viewRef = this._templateRef.createEmbeddedView(null);
  }

  get viewRef() {
    return this._templateRef.createEmbeddedView(null);
  }


}

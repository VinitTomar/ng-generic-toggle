import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGenericToggleComponent } from './ng-generic-toggle.component';

describe('NgGenericToggleComponent', () => {
  let component: NgGenericToggleComponent;
  let fixture: ComponentFixture<NgGenericToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgGenericToggleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGenericToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

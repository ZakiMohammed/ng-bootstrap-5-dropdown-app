import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectAsyncComponent } from './multi-select-async.component';

describe('MultiSelectAsyncComponent', () => {
  let component: MultiSelectAsyncComponent;
  let fixture: ComponentFixture<MultiSelectAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

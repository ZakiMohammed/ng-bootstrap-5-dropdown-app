import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectAsyncComponent } from './single-select-async.component';

describe('SingleSelectAsyncComponent', () => {
  let component: SingleSelectAsyncComponent;
  let fixture: ComponentFixture<SingleSelectAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

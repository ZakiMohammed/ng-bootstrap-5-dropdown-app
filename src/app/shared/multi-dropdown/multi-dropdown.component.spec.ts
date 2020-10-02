import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDropdownComponent } from './multi-dropdown.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { v4 } from 'uuid';

describe('MultiDropdownComponent', () => {
  let component: MultiDropdownComponent;
  let fixture: ComponentFixture<MultiDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiDropdownComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDropdownComponent);
    component = fixture.componentInstance;
    component.items = [
        {
          uuid: v4(),
          id: 4,
          name: 'Apple',
          checked: true,
          visible: true
        }, {
          uuid: v4(),
          id: 5,
          name: 'Mango',
          checked: true,
          visible: true
        }, {
          uuid: v4(),
          id: 6,
          name: 'Banana',
          checked: true,
          visible: true
        }
      ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter list on search', () => {
    component.search = 'Apple';
    expect(component.filterList.length).toEqual(1);
    expect(component.filterList[0].name).toEqual(component.search);
  });

  it('should not filter list on empty search', () => {
    component.search = '';
    expect(component.filterList.length).toEqual(component.items.length);
  });

  it('should get selected item names from list', () => {
    component.items[0].checked = false;
    component.items[0].visible = false;

    component.items[component.items.length - 1].checked = false;
    component.items[component.items.length - 1].visible = false;

    expect(component.selected).toEqual(component.items.map(i => i.name).slice(1, component.items.length - 1).join(', '));
  });

  it('should return true if nothing is visible in the list', () => {
    component.items.forEach(i => i.visible = false);
    expect(component.isEmpty).toBeTrue();
  });

  it('should return false if something is visible in the list', () => {
    fixture.detectChanges();
    expect(component.isEmpty).toBeFalse();
  });

  it('should initialize component onInit', () => {
    fixture.detectChanges();
    expect(component.filterList.length).toEqual(component.items.length);
  });

  it('should emit itemChange output event onChange', () => {
    spyOn(component.itemChange, 'emit');
    component.onChange({
      target: {
        checked: true
      }
    }, {...component.items[0]});
    expect(component.itemChange.emit).toHaveBeenCalled();
  });

  it('should check item incase of unchecked onChange', () => {
    component.items[1].checked = false;
    component.onChange({
      target: {
        checked: true
      }
    }, {...component.items[1]});
    expect(component.items[1].checked).toBeTrue();
  });

  it('should un-check item incase of checked onChange', () => {
    component.onChange({
      target: {
        checked: false
      }
    }, {...component.items[1]});
    expect(component.items[1].checked).toBeFalse();
  });
});

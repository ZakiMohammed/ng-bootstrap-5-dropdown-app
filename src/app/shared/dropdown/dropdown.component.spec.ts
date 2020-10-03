import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
        component.items = [
            {
                id: 4,
                name: 'Apple',
                visible: true
            }, {
                id: 5,
                name: 'Mango',
                visible: true
            }, {
                id: 6,
                name: 'Banana',
                visible: true
            }
        ];
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should filter list on search', () => {
        component.search = 'Apple';
        expect(component.filtered.length).toEqual(1);
        expect(component.filtered[0].name).toEqual(component.search);
    });

    it('should not filter list on empty search', () => {
        component.search = '';
        expect(component.filtered.length).toEqual(component.items.length);
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
        expect(component.filtered.length).toEqual(component.items.length);
    });

    it('should emit itemChange output event onChange', () => {
        spyOn(component.itemChange, 'emit');
        component.onChange({ ...component.items[0] });
        expect(component.itemChange.emit).toHaveBeenCalled();
    });
});

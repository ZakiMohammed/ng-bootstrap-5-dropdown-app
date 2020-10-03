import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './multi-dropdown.model';
import { v4 } from 'uuid';

@Component({
    selector: 'app-multi-dropdown',
    templateUrl: './multi-dropdown.component.html',
    styleUrls: ['./multi-dropdown.component.scss']
})
export class MultiDropdownComponent implements OnInit {

    @Input() items: Item[] = [];
    @Input() placeholder: string;
    @Input() showSearch = true;
    @Input() showAll = true;
    @Input() showStatus = true;
    @Input() showError = false;
    @Output() itemChange = new EventEmitter<Item>(null);

    filtered: Item[] = [];
    all: Item = {
        id: null,
        name: 'All',
        uuid: v4(),
        checked: false,
        visible: true
    };

    private searchText = '';

    get search(): string {
        return this.searchText;
    }

    set search(searchText: string) {
        this.searchText = searchText;

        const search = this.searchText.toLowerCase();
        if (!search) {
            this.filtered = [...this.items];
            this.all.visible = true;
            return;
        }
        this.filtered = this.items.filter(i => i.name.toLowerCase().indexOf(search) !== -1);
        if (this.all.name.toLowerCase().indexOf(search) !== -1) {
            this.all.visible = true;
        } else {
            this.all.visible = false;
        }
    }

    get selected(): string {
        return this.all && this.all.checked ? this.all.name :
            this.items.filter(i => i.checked && i.visible).map(i => i.name).join(', ');
    }

    get isEmpty(): boolean {
        return this.filtered.filter(i => i.visible).length === 0;
    }

    get checked(): number {
        return this.items.filter(i => i.checked).length;
    }

    ngOnInit(): void {
        this.items.map(item => {
            item.uuid = item.uuid || v4();
            item.checked = item.checked || false;
            item.visible = item.visible || true;
        });
        this.filtered = [...this.items];

        if (!this.filtered.length) {
            this.all.visible = false;
        }
    }

    trackByUuid(index: number, item: Item): string {
        return item.uuid;
    }

    onChange($event: any, item: Item): void {
        const checked = $event.target.checked;
        const index = this.items.findIndex(i => i.id === item.id);

        if (item.id === null) {
            this.all.checked = checked;
            for (const iterator of this.items) {
                iterator.checked = checked;
            }
        } else {
            this.items[index].checked = checked;

            /* istanbul ignore else*/
            if (this.all) {
                /* istanbul ignore else*/
                if (this.all.checked) {
                    this.all.checked = false;
                }
                const allChecked = this.items.filter(i => i.id !== null).every(i => i.checked);
                this.all.checked = allChecked;
            }
        }

        this.itemChange.emit(item);
    }

}

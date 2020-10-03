import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './dropdown.model';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

    @Input() items: Item[] = [];
    @Input() placeholder: string;
    @Input() showSearch = true;
    @Input() showStatus = true;
    @Input() showError = false;
    @Output() itemChange = new EventEmitter<Item>(null);

    filtered: Item[] = [];
    item: Item = null;

    private searchText = '';

    get search(): string {
        return this.searchText;
    }

    set search(searchText: string) {
        this.searchText = searchText;

        const search = this.searchText.toLowerCase();
        if (!search) {
            this.filtered = [...this.items];
            return;
        }
        this.filtered = this.items.filter(i => i.name.toLowerCase().indexOf(search) !== -1);
    }

    get isEmpty(): boolean {
        return this.filtered.filter(i => i.visible).length === 0;
    }

    ngOnInit(): void {
        this.items.map(item => {
            item.visible = item.visible || true;
        });
        this.filtered = [...this.items];
    }

    trackById(item: Item): number {
        return item.id;
    }

    onChange(item: Item): void {
        this.item = item;
        this.itemChange.emit(item);
    }
}

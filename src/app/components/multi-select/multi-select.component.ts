import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item } from 'src/app/shared/multi-dropdown/multi-dropdown.model';

@Component({
    selector: 'app-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

    items: Item[] = [];
    currentSelectedItem: Item = null;
    showSearch = true;
    showError = false;
    showAll = true;
    showStatus = true;

    constructor(private appService: AppService) { }

    get checkedItems(): Item[] {
        return this.items.filter(i => i.checked);
    }

    get dropdownText(): string {
        return `<app-multi-dropdown
      [items]="items"
      [showSearch]="showSearch"
      [showAll]="showAll"
      [showStatus]="showStatus"
      [showError]="showError"
      placeholder="Select Foods"
      (itemChange)="onItemChange($event)">
</app-multi-dropdown>`;
    }

    ngOnInit(): void {
        this.items = this.appService.getFoods().map(fruit => ({
            id: fruit.id,
            name: fruit.name
        } as Item));
    }

    onItemChange(item: Item): void {
        this.currentSelectedItem = item;
    }

    onToggleSearch(): void {
        this.showSearch = !this.showSearch;
    }

    onToggleError(): void {
        this.showError = !this.showError;
    }

    onToggleAll(): void {
        this.showAll = !this.showAll;
    }

    onToggleStatus(): void {
        this.showStatus = !this.showStatus;
    }

}

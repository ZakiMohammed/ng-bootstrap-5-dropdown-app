import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item } from 'src/app/shared/dropdown/dropdown.model';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {

  items: Item[] = [];
  currentSelectedItem: Item = null;
  showSearch = true;
  showError = false;
  showStatus = true;

  constructor(private appService: AppService) {}

  get dropdownText(): string {
    return `<app-dropdown
    [items]="items"
    [showSearch]="showSearch"
    [showStatus]="showStatus"
    [showError]="showError"
    placeholder="Select Food"
    (itemChange)="onItemClick($event)">
</app-dropdown>`;
  }

  ngOnInit(): void {
    this.items = this.appService.getFoods().map(fruit => ({
      id: fruit.id,
      name: fruit.name
    } as Item));
  }

  onItemClick(item: Item): void {
    this.currentSelectedItem = item;
  }

  onToggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  onToggleError(): void {
    this.showError = !this.showError;
  }

  onToggleStatus(): void {
    this.showStatus = !this.showStatus;
  }

}

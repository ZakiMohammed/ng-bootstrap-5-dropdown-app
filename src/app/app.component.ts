import { Component, OnInit } from '@angular/core';
import { Item } from './dropdown/dropdown.model';
import { Fruit } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fruits: Fruit[] = [];
  items: Item[] = [];
  currentSelectedItem: Item = null;
  showSearch = true;
  showError = false;
  showAll = true;
  showStatus = true;

  constructor(private appService: AppService) {
    this.fruits = appService.getFruits();
  }

  get random(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  get checkedItems(): Item[] {
    return this.items.filter(i => i.checked);
  }

  ngOnInit(): void {
    this.items = this.fruits.map(fruit => ({
      id: fruit.id,
      name: fruit.name
    } as Item));
  }

  onItemChange(item: Item): void {
    this.currentSelectedItem = item;
  }

  onToggleSearch($event: any): void {
    this.showSearch = !this.showSearch;
  }

  onToggleError($event: any): void {
    this.showError = !this.showError;
  }

  onToggleAll($event: any): void {
    this.showAll = !this.showAll;
  }

  onToggleStatus($event: any): void {
    this.showStatus = !this.showStatus;
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './dropdown.model';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  @Input() list: Item[] = [];
  @Input() placeholder: string;
  @Input() showSearch = true;
  @Input() showAll = true;
  @Input() showStatus = true;
  @Input() showError = false;
  @Output() itemChange = new EventEmitter<any>(null);

  filterList: Item[] = [];
  all: Item = {
    id: 0,
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
      this.filterList = [...this.list];
      this.all.visible = true;
      return;
    }
    this.filterList = this.list.filter(i => i.name.toLowerCase().indexOf(search) !== -1);
    if (this.all.name.toLowerCase().indexOf(search) !== -1) {
      this.all.visible = true;
    } else {
      this.all.visible = false;
    }
  }

  get selected(): string {
    return this.all && this.all.checked ? this.all.name :
      this.list.filter(i => i.checked && i.visible).map(i => i.name).join(', ');
  }

  get isEmpty(): boolean {
    return this.filterList.filter(i => i.visible).length === 0;
  }

  get checked(): number {
    return this.list.filter(i => i.checked).length;
  }

  ngOnInit(): void {
    this.list.map(item => {
      item.uuid = item.uuid || v4();
      item.checked = item.checked || false;
      item.visible = item.visible || true;
    });
    this.filterList = [...this.list];

    if (!this.filterList.length) {
      this.all.visible = false;
    }
  }

  trackByUuid(index: number, item: Item): string {
      return item.uuid;
  }

  onChange($event: any, item: Item): void {
    const checked = $event.target.checked;
    const index = this.list.findIndex(i => i.id === item.id);

    if (item.id === 0) {
      this.all.checked = checked;
      for (const iterator of this.list) {
        iterator.checked = checked;
      }
    } else {
      this.list[index].checked = checked;

      /* istanbul ignore else*/
      if (this.all) {
        /* istanbul ignore else*/
        if (this.all.checked) {
          this.all.checked = false;
        }
        const allChecked = this.list.filter(i => i.id !== 0).every(i => i.checked);
        this.all.checked = allChecked;
      }
    }

    this.itemChange.emit(item);
  }
}

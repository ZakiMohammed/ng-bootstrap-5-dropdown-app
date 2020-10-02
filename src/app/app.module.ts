import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';
import { MultiDropdownComponent } from './shared/multi-dropdown/multi-dropdown.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    MultiSelectComponent,
    SingleSelectComponent,
    MultiDropdownComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

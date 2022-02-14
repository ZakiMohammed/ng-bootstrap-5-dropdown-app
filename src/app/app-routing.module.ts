import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MultiSelectAsyncComponent } from './components/multi-select-async/multi-select-async.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SingleSelectAsyncComponent } from './components/single-select-async/single-select-async.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'multi-select-async', component: MultiSelectAsyncComponent },
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'single-select-async', component: SingleSelectAsyncComponent },
  { path: 'single-select', component: SingleSelectComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

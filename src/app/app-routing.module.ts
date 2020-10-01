import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';

const routes: Routes = [
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'single-select', component: SingleSelectComponent },
  { path: '**', redirectTo: 'multi-select', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

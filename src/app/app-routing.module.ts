import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ItemComponent } from './items/item/item.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'item', component: ItemComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

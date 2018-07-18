import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
  ],
  declarations: [
    ItemComponent,
  ]
})
export class ItemsModule { }

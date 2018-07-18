import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { ItemsModule } from './items/items.module';
import { LoginComponent } from './login/login.component';
import { AnotherItemComponent } from './another-item/another-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AnotherItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

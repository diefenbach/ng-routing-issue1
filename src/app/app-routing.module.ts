import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherItemComponent } from './another-item/another-item.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'another', component: AnotherItemComponent },
  ]},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

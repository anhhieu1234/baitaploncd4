import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { GiohangComponent } from './giohang/giohang.component';
import { ChitietComponent} from './chitiet/chitiet.component';
import {  LoginComponent} from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'chitiet', component: ChitietComponent
  },
  {
    path: 'cart', component: GiohangComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
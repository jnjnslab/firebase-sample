import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Store01Component } from './store01/store01.component';
import { Login01Component } from './login01/login01.component';
import { Storage01Component } from './storage01/storage01.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'store01',component: Store01Component},
  {path:'login01',component: Login01Component},
  {path:'storage01',component: Storage01Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

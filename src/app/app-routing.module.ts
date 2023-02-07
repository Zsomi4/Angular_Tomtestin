/*
 File: app-routing.module.ts
 Author: Gubis Zsombor Dániel
 Copyright: 2023, Gubis ZSombor Dániel
 Group: Szoft_II_N
 Date: 2023-07-07
 Github: https://github.com/Zsomi4/
 Licenc: GNU GPL
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "github", component: GithubComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

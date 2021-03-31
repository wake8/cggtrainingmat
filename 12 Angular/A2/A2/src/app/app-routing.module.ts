import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdFormComponent } from './ad-form/ad-form.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /*{path:'', pathMatch:'full', redirectTo:'home'},
  {path:'ad',component:AdFormComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:DefaultComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'user'},
  {path:'admin', component:AdminComponent,
      children:[
        {path:'', pathMatch:'full',redirectTo:'menu'},
        {path:'menu', component:MenuComponent},
        {path:'restaurant', component:RestaurantComponent},
        {path:'**', component:PageNotFoundComponent}
      ] 
  },
  {path:'user', component:UserComponent,
   children:[
      {path:'', pathMatch:'full',redirectTo:'restaurant1'},
      {path:'restaurant1', component:PageNotFoundComponent},
      {path:'**', component:PageNotFoundComponent}
    ] 
  },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'search/:searchTerm', component:HomeComponent },
  { path:'tag/:tag', component:HomeComponent },
  { path:'course/:id', component:CoursePageComponent },
  { path:'cart-page', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

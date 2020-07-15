import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail', component: ProductDetailComponent},
  { path:'not-found', component:  NotFoundComponent},
  { path:'**', redirectTo:'/not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


                      

export class AppRoutingModule { }

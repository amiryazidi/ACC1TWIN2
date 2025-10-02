import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  { path :'home',  component : HomeComponent},
  { path : '' , redirectTo : 'home' , pathMatch : 'full'}, // default route
  { path : 'product' , component : ProductComponent},
  { path : '**' , component : NotFoundComponent}, // wildcard route for 404 not found page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

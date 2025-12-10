import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ListEventComponent } from './features/events/list-event/list-event.component';
import { ReactiveFormComponent } from './layout/reactive-form/reactive-form.component';
import { DrivenFormComponent } from './layout/driven-form/driven-form.component';
import { DetailsProductComponent } from './layout/details-product/details-product.component';
import { AddProductComponent } from './layout/add-product/add-product.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SignupComponent } from './features/users/signup/signup.component';
import { SigninComponent } from './features/users/signin/signin.component';

const routes: Routes = [
  // Default route - redirect to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login route (no guard - public)
  { path: 'login', component: SigninComponent },

  // Protected routes
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: DetailsProductComponent, canActivate: [AuthGuard] },
  { path: 'rf', component: ReactiveFormComponent, canActivate: [AuthGuard] },
  { path: 'dr', component: DrivenFormComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AddProductComponent, canActivate: [AuthGuard] },

  // Lazy loading (protected)
  {
    path: 'events',
    loadChildren: () =>
      import('./features/events/events.module').then(m => m.EventsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./features/tickets/tickets.module').then(m => m.TicketsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./features/feedback/feedback.module').then(m => m.FeedbackModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then(m => m.UsersModule)
  },

  // 404 - redirect to login
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

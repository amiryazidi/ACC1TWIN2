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
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [


  // tes anciennes routes
  { path: 'product', component: ProductComponent },
  { path: 'details/:id', component: DetailsProductComponent },
  { path: 'rf', component: ReactiveFormComponent },
  { path: 'dr', component: DrivenFormComponent },
  { path: 'add', component: AddProductComponent, canActivate: [authGuard] },
  { path: 'edit/:id', component: AddProductComponent, canActivate: [authGuard] },

  // lazy loading
  {
    path: 'events',
    loadChildren: () =>
      import('./features/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./features/tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./features/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then(m => m.UsersModule)
  },

  // 404
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

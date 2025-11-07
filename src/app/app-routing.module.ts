import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ListEventComponent } from './features/events/list-event/list-event.component';
import { ReactiveFormComponent } from './layout/reactive-form/reactive-form.component';

const routes: Routes = [
 // { path :'events',  component : ListEventComponent},
  { path : '' , redirectTo : 'events' , pathMatch : 'full'}, // default route
  { path : 'product' , component : ProductComponent},
  { path : 'rf' , component : ReactiveFormComponent},
  { path: 'events', loadChildren: () =>
    import('./features/events/events.module').then(m => m.EventsModule) },
 { path: 'tichets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
 { path: 'tichets', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
 { path: 'tichets', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path : '**' , component : NotFoundComponent}, // wildcard route for 404 not found page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

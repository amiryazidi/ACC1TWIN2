import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [{ path: '', component: UsersComponent },


   { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  // /users/signin
  // /users/signup
  { path: 'profile', component: UsersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUsersComponent } from './register-users/register-users.component';

const routes: Routes = [
  { path: 'RegisterUser', component: RegisterUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

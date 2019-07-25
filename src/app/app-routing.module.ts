import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './site/login/login.component';
import { ListejoueursComponent } from './site/listejoueurs/listejoueurs.component';
import { CreateUserComponent } from './site/create-user/create-user.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'players', canActivate: [AuthGuard], component: ListejoueursComponent },
  { path: 'createUser', canActivate: [AuthGuard], component: CreateUserComponent },
  { path: '', component : HomeComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

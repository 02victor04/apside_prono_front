import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './site/login/login.component';
import { ListejoueursComponent } from './site/listejoueurs/listejoueurs.component';
import { CreateUserComponent } from './site/create-user/create-user.component';
import { CreateEventComponent } from './site/create-event/create-event.component';
import { EventComponent } from './site/event/event.component';
import { ContestComponent } from './site/contest/contest.component';
import { CreateContestComponent } from './site/create-contest/create-contest.component';
import { DetailjoueurComponent } from './site/detailjoueur/detailjoueur.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'players', canActivate: [AuthGuard], component: ListejoueursComponent },
  { path: 'evenements', canActivate: [AuthGuard], component: EventComponent },
  { path: 'concours', canActivate: [AuthGuard], component: ContestComponent },
 
  // { path: 'createUser/:id', component: ListejoueursComponent},
  
  {path: 'listejoueurs/:id', component: DetailjoueurComponent},
  { path: 'listejoueurs', component: CreateUserComponent},
  { path: 'createUser', canActivate: [AuthGuard], component: CreateUserComponent },
  { path: 'createEvent', canActivate: [AuthGuard], component: CreateEventComponent },
  { path: 'createContest', canActivate: [AuthGuard], component: CreateContestComponent },
  { path: '', component : HomeComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',

  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'dashboard',
    component: DashboardComponent,

  },

  {
    path: 'stats',
    component: StatsComponent,

  },

  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

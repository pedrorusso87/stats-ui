import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

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

  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModalComponent } from './register.component';

const routes: Routes = [{ path: '', component: RegisterModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
  registerForm: FormGroup
 }

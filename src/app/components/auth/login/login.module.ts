import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginRoutingModule } from './login-routing.module';
import { LoginDialogComponent } from './login.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [LoginDialogComponent],
  imports: [
    CommonModule,
    MatInputModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [LoginDialogComponent]
})
export class LoginModule { }

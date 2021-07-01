import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Subject } from 'rxjs';
import { UserRegistrationRequest } from './model/register-model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });
  userRegistrationRequest: UserRegistrationRequest
  errors = false;
  errorMessage = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
   /* this.userRegistrationRequest = {
      username: this.getUsername(),
      email: this.getEmail(),
      password: this.getPassword()
    }*/
    this.validateRegistrationForm();
  }

  validateRegistrationForm(): void {
    if (this.registerForm.valid) {
      this.errors = false;
      this.spinner.show();
    } else {
      this.errors = true;
    }
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }

  getUsername(): any {
    return this.registerForm.get('username')?.value;
  }
}

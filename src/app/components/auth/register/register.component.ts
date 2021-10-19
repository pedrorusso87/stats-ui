import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';
import { UserRegistrationRequest } from './model/register-model';
import { passwordMatchValidator } from './validators/passwordMatchValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterModalComponent implements OnInit {
  registerForm: FormGroup;
  email = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  confirmPassword = new FormControl('', [Validators.required, passwordMatchValidator]);
  userRegistrationRequest: UserRegistrationRequest
  errors = false;
  errorMessage = null;
  hide = true;
  hidePassword = true;
  showPasswordError = true;
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.registerForm = this.fb.group({
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userRegistrationRequest = {
      username: this.getUsername(),
      email: this.getEmail(),
      password: this.getPassword()
    }
    //this.validateRegistrationForm();
    this.authService.register(this.userRegistrationRequest).subscribe(response => {
      console.log(response);
    });
  }

  validateRegistrationForm(): void {
    if (this.registerForm.valid) {
      this.errors = false;
      this.spinner.show();
    } else {
      this.errors = true;
    }
  }

  getErrorMessage() {
    return "error";
  }

  passwordMatch() {
    console.log(this.confirmPassword.errors)
    return this.getPassword() === this.getConfirmPassword();
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

  getConfirmPassword(): any {
    return this.registerForm.get('confirmPassword')?.value;
  }
}

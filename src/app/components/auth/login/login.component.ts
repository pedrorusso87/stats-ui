import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Subject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  errors = false;
  errorMessage = null;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    ) {
      this.loginForm = this.fb.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.validateForm();
  }

  validateForm(): void {
    if (this.loginForm.valid) {
      this.errors = false;
      this.spinner.show();
    } else {
      this.errors = true;
    }
  }

  listenForLogin(): void {
  }

  getEmail(): any {
    return this.loginForm.get('email')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

  close(): void {
    this.errorMessage = null;
  }

  ngOnDestroy(): void {
  }
}

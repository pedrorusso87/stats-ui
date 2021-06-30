import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Subject } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  });
  user: any;
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    /*this.store.dispatch(new fromRegister.RegisterUser({
      email: this.getEmail(),
      password: this.getPassword()
    }));*/
    this.spinner.show();
    //this.listenForRegister();
  }

 /* listenForRegister(): void {
    combineLatest([this.registeredUserPending$, this.registeredUser$]).subscribe(
      ([pending, user]) => {
        if (!pending && user) {
          this.spinner.hide();
          this.router.navigateByUrl('/create-match');
        }
      });
  }*/

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }

  getUsername(): any {
    return this.registerForm.get('username')?.value;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from '../../_interface/user';
import { AuthService } from '../../_services/auth/auth.service';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../layouts/loginlayout/loginlayout/loginlayout.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  loading = false;
  isLoggedIn = false;
  isLoginFailed = false;
  isSubmitted = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private tokenStorage: TokenStorageService, private route: ActivatedRoute,
    private router: Router, public fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['/admin/dashboard']);
    }

    this.reactiveForm();
  }

  /* Reactive form */
  reactiveForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  submitForm() {

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.isSubmitted = true;

    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.loading = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/admin/dashboard']);
      },
      err => {
        this.loading = false;
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
      }
    );
  }
}
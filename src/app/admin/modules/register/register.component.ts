import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../../_services/auth/auth.service';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../layouts/loginlayout/loginlayout/loginlayout.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  hide = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  User: any = ['Super Admin', 'Admin', 'Moderator'];

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['/admin/dashboard']);
    }

    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.userForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.userForm.controls[control].hasError(error);
  }

  submitForm() {


    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    this.userForm.value['role'] = Array("admin");

    let userData = { ...this.userForm.value, "username": this.userForm.value['email'] }

    this.authService.register(userData).subscribe(
      data => {
        console.log("Success");
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.loading = false;
      },
      err => {
        console.log("Fail");
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
        this.loading = false;
        this.isSuccessful = false;
      }
    );
  }

}




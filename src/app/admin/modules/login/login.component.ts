import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../layouts/loginlayout/loginlayout/loginlayout.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  hide = true;

  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    console.log(this.myForm.value)
  }
}
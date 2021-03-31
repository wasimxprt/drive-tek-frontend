import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../layouts/loginlayout/loginlayout/loginlayout.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  User: any = ['Super Admin', 'Admin', 'Moderator'];

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
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




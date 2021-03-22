import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  onSubmit() {

    this.form['username'] = this.form.email;
    this.form["role"] = ["admin"];

    this.authService.register(this.form).subscribe(
      data => {        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {        
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    );
  }

}

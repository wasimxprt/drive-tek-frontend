import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../layouts/loginlayout/loginlayout/loginlayout.component.scss']
})
export class RegisterComponent implements OnInit {

  User: any = ['Super Admin', 'Admin', 'Moderator'];

  constructor() { }

  ngOnInit(): void {
  }

}




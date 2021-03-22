import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/admin/login']);   
  }

}

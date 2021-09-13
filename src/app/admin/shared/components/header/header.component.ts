import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../../../_services/token-storage/token-storage.service';

import { User } from '../../../_models/user';
import { Email } from '../../../_models/email';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isShowInput = false;

  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  public user$: Observable<User>
  public emails$: Observable<Email[]>

  constructor(private tokenStorage: TokenStorageService, private router: Router) { 
    console.log("header constructor")
  }

  ngOnInit() { 
    console.log("header")
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public showInput(): void {
    this.isShowInput = true;
  }

  profile() {

    this.router.navigate(['/admin/profile']);
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/admin/login']);
  }
}
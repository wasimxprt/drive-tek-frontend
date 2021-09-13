import { Component, EventEmitter, Input, Output } from '@angular/core';

import { routes } from '../../../../_consts';
import { User } from '../../../../_models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://drivetek.com";

  public signOutEmit(): void {
    this.signOut.emit();
  }
}

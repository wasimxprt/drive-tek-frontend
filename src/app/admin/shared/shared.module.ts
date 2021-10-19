import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { UserComponent } from './components/header/user/user.component';
import { EmailComponent } from './components/header/email/email.component';
import { NotificationsComponent } from './components/header/notifications/notifications.component';
import { SearchComponent } from './components/header/search/search.component';
import { ShortNamePipe } from './components/header/pipes/short-name';


import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, SettingsMenuComponent,SearchComponent, UserComponent, EmailComponent, NotificationsComponent, ShortNamePipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SettingsMenuComponent,
    SearchComponent,
    UserComponent,
    EmailComponent,
    NotificationsComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserProfileComponent
  ],
  exports: [UserProfileComponent]
})
export class UsersModule { }

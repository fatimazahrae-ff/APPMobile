import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { UtilService } from './util/util.service';
import { CameraService } from './camera/camera.service';
import { ChatsService } from './chats/chats.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ChatsService, AuthService, UserService, UtilService, CameraService]
})
export class ServicesModule { }

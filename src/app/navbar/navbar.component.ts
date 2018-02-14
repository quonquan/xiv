import { Component, OnInit } from '@angular/core';

import { UserService, User } from '../shared/user_service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  email: string;
  photoURL: string;

  constructor(private $userService: UserService) {}

  ngOnInit() {
    this.$userService.getUser().subscribe(user => {
      this.email = user.email;
      this.photoURL = user.photoURL;
    });
  }
}

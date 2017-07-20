import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  providers: [AuthService]
})
export class TopMenuComponent implements OnInit {

  constructor(private _authService: AuthService) {
    console.warn(this._authService.mode)
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     private signinForm: FormGroup;

    constructor(private _authService: AuthService,
                private _authToken: Angular2TokenService) { }

    ngOnInit() {
      this.signinForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      });
    }

    onSubmit() {
    this._authToken.signIn({email: this.signinForm.value.email,
                            password: this.signinForm.value.password})
    .subscribe(
      res => {
        console.log('auth response:', res);
      },
      err => {
        console.log('error response', err);
      }
    );
  }
}

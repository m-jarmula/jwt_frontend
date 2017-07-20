import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public onValidateToken: Observable<any> = new Observable<any>();

  constructor(private _authTokenService: Angular2TokenService) {
    this.onValidateToken = this._authTokenService.validateToken();
  }
}

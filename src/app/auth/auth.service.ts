export class AuthService {
  readonly LOGIN_MODE: string = 'login';
  readonly REGISTER_MODE: string = 'register';
  public mode: string;

  constructor(){
    this.mode = this.LOGIN_MODE;
  }
}

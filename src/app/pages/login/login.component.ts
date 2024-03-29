import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Credenciales } from 'src/app/shared/interface/credenciales';
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  credenciales:  Credenciales = { email: '', password: '' };

  iniciarSesion() {
    console.log(this.credenciales);
    this.loginService.login(this.credenciales).subscribe((data: any) => {
      // Recibimos el token
      console.log('token que se guarda1', data);
      this.tokenService.setToken(data.token, data.userId);
      this.router.navigate(['/posts']);
    });
  }

}

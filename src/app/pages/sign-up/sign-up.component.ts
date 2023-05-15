import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interface/user.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userCreated: User = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: new Date(),
    profile_picture: '',
  }

  constructor(private signupService: UserService, private router: Router, private tokenService: TokenService) { }

  createUser() {
    console.log('crear', this.userCreated);

    if (this.userCreated.name == '') return window.alert('Falta ingresar su nombre');
    if (this.userCreated.last_name == '') return window.alert('Falta ingresar su apellido');
    if (this.userCreated.email == '') return window.alert('Falta ingresar su email');
    if (this.userCreated.password == '') return window.alert('Falta ingresar su contraseña');
    if (this.userCreated.password.length < 6) return window.alert('La contraseña debe de ser de al menos 6 carateres');

    if (this.userCreated.profile_picture == '') this.userCreated.profile_picture = 'https://th.bing.com/th/id/OIP.n3BKzWOcDwH5yOtN42eYKQHaHa?pid=ImgDet&rs=1';

    this.signupService.postUser(this.userCreated).subscribe((response: any) => {
      this.tokenService.setToken(response.token, response.userId);
      this.router.navigate(['/posts']);
    })
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SignupService } from 'src/app/shared/services/signup.service';
import { User } from 'src/app/shared/interface/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  SignupForm: FormGroup;

  userCreated: User = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: new Date(),
  }

  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  birthday: Date = new Date();

  constructor(formBuilder: FormBuilder, private signupService: SignupService, private router: Router){
    this.SignupForm = formBuilder.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      birthday: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{2,30}$/)]]
    })
  }

  createUser(){
    this.userCreated.name = this.name;
    this.userCreated.last_name = this.lastname;
    this.userCreated.email = this.email;
    this.userCreated.password = this.password;
    this.userCreated.birthday = this.birthday;
    console.log(this.userCreated);
    this.signupService.postUser(this.userCreated).subscribe((Response: any) => {
      this.router.navigate(['/posts']);
      console.log(Response);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interface/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userId: string = 'Error';
  userAge: number = 0;
  dateDay: string = '0';
  dateMonth: string = '0';
  dateYear: string = '0';
  user:User = {
    name: 'No Encontrado',
    last_name: '| Inicia Sesion',
    email: '',
    password: '',
    birthday: new Date()
  }

  constructor(private userService: UserService, private route: ActivatedRoute){ }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      console.log("hola mundo");
      this.userId = params.get('id') || 'Error';
      this.getUser();
    });
  }

  getUser(){
    if(this.userId != 'Error'){
      console.log("get user");
      this.userService.getUserById(this.userId).subscribe(
        (response: any) => {
          this.user = response;
          this.dateMonth = this.user.birthday?.toString().substring(5, 7) || '0';
          this.dateDay = this.user.birthday?.toString().substring(8, 10) || '0';
          this.dateYear = this.user.birthday?.toString().substring(0, 4) || '0';
          console.log(this.user);
          console.log(this.dateMonth, this.dateDay, this.dateYear);
        }
      )
    }
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private http: HttpClient) {
    this.getPets();
  }

  getPets() {
    this.http.get(environment.apiUrl+'pets').subscribe((data) => {
      console.log(data);
    });
  }

}

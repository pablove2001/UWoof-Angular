import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get('http://localhost:3000/pets').subscribe((data) => {
      console.log(data);
    });
  }

}

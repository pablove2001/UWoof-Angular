import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  ngOnInit(): void {
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle !== null) {
      menuToggle.addEventListener("click", function () {
        const nav = document.querySelector(".nav");
        if (nav !== null) {
          nav.classList.toggle("mobile-nav");
          menuToggle.classList.toggle("is-active");
        }
      });
    }
  }
}

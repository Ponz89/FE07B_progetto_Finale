import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/user';
import { UserService } from '../services/user.service';

@Component({
  template: `
    <div class="container text-white font-italic">
      <h1 class="home text-center mb-3">PONZ -Net</h1>
      <div class="text-center">
        <div class="welcome mb-3">
          <h3>
            Rilassati e Fattura!
            Soluzione semplice e veloce per le tue fatture Online
          </h3>
        </div>
        <img
          src="https://www.fisco7.it/wp-content/uploads/consultazione-acquisizione-fatture-elettroniche.jpg"
          alt=""
        />
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 5rem;
      }
      h1, h3 {
        color: rgb(0,255,0);
      }
      img {
        border-radius: 5%;
      }
    `,
  ],
})
export class HomePagePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

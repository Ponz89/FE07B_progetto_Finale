import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/user';
import { UserService } from '../services/user.service';

@Component({
  template: `

    <p><img src="https://www.fisco7.it/wp-content/uploads/consultazione-acquisizione-fatture-elettroniche.jpg" alt=""></p>


  `,
  styles: [`

  img {
    border-radius: 5%;
    margin-top: 10rem;
    margin-left: 20vw;
  }
  `
  ]
})
export class HomePagePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
      <img src="https://ps.w.org/under-construction-page/assets/screenshot-2.png?rev=1840052" alt="">
    </p>
  `,
  styles: [`
  p {
    margin-top: 10rem;
    margin-left: 20vw;
  }`
  ]
})
export class HomePagePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

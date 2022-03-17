import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  template: `
    <div id="loginQuad" class="container text-center bg-dark text-white">
      <h2><em>Ponz -NET</em></h2>
      <div class="row justify-content-center">
        <div class="col-6">
          <form #form="ngForm" (ngSubmit)="onlogin(form)">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                ngModel
                placeholder="admin"
                name="username"
                class="form-control"
                type="text"
                id="username"
              />
            </div>
            <div class="form-group">
              <label for="pass">Password</label>
              <input
                ngModel
                placeholder="111111 <- sono SEI 1"
                name="password"
                class="form-control"
                type="password"
                id="password"
              />
            </div>
            <div class="btnEntra">
              <button
                class="btn btn-secondary m-3"
                [disabled]="false"
                type="submit"
              >
                Entra
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        opacity: .95;
        width: 40em;
        margin-top: 22rem !important;
        border-radius: 3%;
      }

      h2 {
        padding: 25px;
        color: rgb(0,255,0);

      }

      .btnEntra {
        padding: 20px;
      }
    `,
  ],
})
export class LoginPagePage implements OnInit {
  form!: NgForm;
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {}

  onlogin(form: any) {
    this.authSrv.login(form.value);
    console.log(form.value);
  }
}

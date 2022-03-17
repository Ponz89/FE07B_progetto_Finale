import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  template: `
    <div id="loginQuad" class="container text-center bg-dark text-white">
      <h2><em>Ponz -NET</em></h2>
      <div class="row justify-content-center">
        <div class="col-6">
          <form #form="ngForm" (ngSubmit)="onsignup(form)">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                ngModel
                name="username"
                class="form-control"
                type="username"
                id="username"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                ngModel
                name="email"
                class="form-control"
                type="email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                placeholder="deve contenere almeno 6 caratteri."
                ngModel
                name="password"
                class="form-control"
                type="password"
                id="password"
              />
            </div>
            <div>
              <h3 class="mt-2">Seleziona il tuo ruolo:</h3>
              <select
                ngModel
                name="ruolo"
                class="form-select my-3"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="ROLE_USER">Utente</option>
                <option value="ROLE_ADMIN">Amministratore</option>
              </select>
            </div>
            <div class="btnRegistrati">
              <button
                class="btn btn-secondary m-3"
                [disabled]="false"
                type="submit"
              >
                Registrati!
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
        margin-top: 15rem !important;
        border-radius: 3%;
      }
      h2 {
        color: rgb(0,255,0);
        padding: 25px;

      }

      .btnRegistrati {
        padding-bottom: 20px;
      }
    `,
  ],
})
export class SignUpPage implements OnInit {
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onsignup(form: NgForm) {
    this.authSrv.signup(form.value).subscribe((res) => {
      alert('Registrazione avvenuta!');
      this.router.navigate(['/login']);
    });
  }
}

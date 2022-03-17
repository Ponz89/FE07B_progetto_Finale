import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthGuardGuard } from '../_guard/auth-guard.guard';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><em>Ponz -net /</em> Gestione Fatture</a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link mx-3"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-3"
                [routerLink]="['login']"
                routerLinkActive="active"
                [hidden]="this.authSrv.loggedIn()"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-3"
                [routerLink]="['signup']"
                routerLinkActive="active"
                [hidden]="this.authSrv.loggedIn()"
                >Sign Up</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-3"
                [routerLink]="['fatture']"
                routerLinkActive="active"
                >Fatture</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-3"
                [routerLink]="['clienti']"
                routerLinkActive="active"
                >Clienti</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-3"
                [routerLink]="['users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
            <li class="nav-item">
              <button
                class="btn btn-danger mx-4"
                (click)="onlogOut()"
                [hidden]="!this.authSrv.loggedIn()"
              >
                LogOut
              </button>
            </li>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`

  .navbar-brand {
    color: rgb(0,255,0);
    pointer-events: none;
  }

  .active {
    color: rgb(0,255,0) !important;
    border: 1px solid rgb(0,255,0);
  }
  `],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthGuardGuard, public authSrv: AuthService) {}
  ngOnInit(): void {}

  onlogOut() {
    if (this.authSrv.loggedIn()) {
     this.authSrv.logOut();
    } else {
      alert('Non hai ancora effettuato il login!');
    }
  }
}

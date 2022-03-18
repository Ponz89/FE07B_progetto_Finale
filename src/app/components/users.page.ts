import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="container user">
      <div class="row">
        <div class="col-md-12">
          <table class="table text-center bg-dark text-white">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Ruoli</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let user of users">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <span
                    class="btn text-white"
                    *ngFor="let ruolo of user.roles"
                    >{{ ruolo.roleName }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="container d-flex">
      <nav aria-label="Page navigation example justify-content-start">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link text-white bg-dark" (click)="caricaprevPag(this.p)">
              Previous
            </button>
          </li>
          <li class="page-item" *ngFor="let pagina of numPag; let p = index">
            <button class="page-link text-white bg-dark" (click)="caricaPag(p)">
              {{ p + 1 }}
            </button>
          </li>
          <li class="page-item">
            <button class="page-link text-white bg-dark" (click)="caricanextPag(this.p)">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [
    `
      .user {
        opacity: 0.95;
        margin-top: 5rem !important;
      }
    `,
  ],
})
export class UsersPage implements OnInit {
  users!: Array<Users>;
  numPag!: any;
  p: number = 0;
  k!: number;

  constructor(private usrSrv: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usrSrv.getAll(this.p).subscribe((res) => {
      this.users = res.content;
      this.p = Number(res.pageable.pageNumber);
      console.log(res.pageable);
      const numeroPag = Array(res.totalPages);
      this.numPag = numeroPag;
    });
  }
  caricaPag(k: number) {
    this.usrSrv.getAll(k).subscribe((res) => {
      this.users = res.content;
      this.p = k;
    });
  }

  caricaprevPag(k: number) {
    if (this.p == 0) {
      this.caricaPag(k);
      return;
    } else {
      --k;
      this.caricaPag(k);
      return;
    }
  }

  caricanextPag(k: number) {
    if (this.p == 4) {
      this.caricaPag(k);
      return;
    } else {
      ++k;
      this.caricaPag(k);
      return;
    }
  }

  cambiaPag() {
    this.router.navigate(['creacliente']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../services/clienti.service';
import { Router } from '@angular/router';
import { Cliente } from '../_models/cliente';

@Component({
  template: `

<div class="text-center">
          <input
            id="searchbar"
            [(ngModel)]="ricerca"
            type="text"
            name="search"
            placeholder="Cerca per Ragione Sociale"
            class="ms-3"
          />
        </div>
    <div class="container">
      <table class="table text-white bg-dark">
        <thead>
          <tr>
            <th scope="col">ID cliente</th>
            <th scope="col">Ragione Sociale</th>
            <th scope="col">Partita IVA</th>
            <th scope="col">E-mail</th>
            <th>
              <button class="btn btn-success" (click)="cambiaPag()">
                Aggiungi Cliente
              </button>
            </th>
          </tr>
        </thead>
        <tbody *ngFor="let cliente of getClientiFiltrati()">
          <tr>
            <th scope="row">{{ cliente.id }}</th>
            <td>{{ cliente.ragioneSociale }}</td>
            <td>{{ cliente.partitaIva }}</td>
            <td>{{ cliente.email }}</td>
            <td>
              <button
              class="btn btn-primary btn-sm m-2"
                [routerLink]="['/dettaglicliente/', cliente.id]"
                routerLinkActive="router-link-active"
              >
                Dettagli cliente
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <div class="container d-flex">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link text-white bg-dark" (click)="caricaprevPag(this.p)">
                Previous
              </button>
            </li>
            <li class="page-item " *ngFor="let pagina of numPag; let p = index">
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
      .table {
        opacity: .95;
        margin-top: 1.5rem !important;
      }

      input {
        width: 20rem;
        margin-top: 5rem;
      }
    `,
  ],
})
export class InfoClientiPage implements OnInit {
  constructor(private clientiSrv: ClientiService, private router: Router) {}
  clienti!: any;
  numPag!: any;
  clientiFiltrati!: Cliente[];
  ricerca = '';
  response: any;
  p: number = 0;
  k!: number;
  ngOnInit(): void {


      this.clientiSrv.getAll(this.p).subscribe((res) => {
        this.response = res;
        this.clienti = this.clientiFiltrati = this.response.content;
        const numeroPag = Array(this.response.totalPages);
        this.numPag = numeroPag;


      });

  }
  getClientiFiltrati(): Cliente[] {
    if (!this.ricerca) {
      return this.clienti;
    }
    const filteredArray = this.clienti.filter((c: any) =>
      c.ragioneSociale.includes(this.ricerca)
    );
    return filteredArray;
  }

  onSearch() {
    this.clientiFiltrati = this.clienti.filter((c: any) => {
      c.ragioneSociale.includes(this.ricerca);
    });
  }
  caricaPag(k: number) {
    this.clientiSrv.getAll(k).subscribe((res) => {
      this.clienti = res.content;
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


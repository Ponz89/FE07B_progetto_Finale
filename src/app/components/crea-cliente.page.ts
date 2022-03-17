import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientiService } from '../services/clienti.service';
import { Cliente } from '../_models/Cliente';
import { Comune } from '../_models/Comune';
import { Provincia } from '../_models/Provincia';

@Component({
  template: `
    <div class="container card text-white bg-dark">
      <h2 class="mb-5">Nuovo Cliente</h2>
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="nomeContatto" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.nomeContatto"
            name="nome"
          />
        </div>
        <div class="col-md-4">
          <label for="cognome" class="form-label">Cognome</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.cognomeContatto"
            name="cognome"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="telefono" class="form-label">Telefono</label>
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              [(ngModel)]="nuovoCliente.telefonoContatto"
              name="telefono"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div class="invalid-feedback">Inserisci un numero di telefono</div>
          </div>
        </div>
        <div class="col-md-5">
          <label for="emailContatto" class="form-label">Email Cliente</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.emailContatto"
            name="emailContatto"
            required
          />
          <div class="invalid-feedback">Inserisci un indirizzo email</div>
        </div>
        <div class="col-md-6">
          <label for="ragioneSociale" class="form-label">Ragione Sociale</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.ragioneSociale"
            name="ragioneSociale"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="partitaIva" class="form-label">Partita Iva</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.partitaIva"
            name="partitaIva"
            required
          />
        </div>
        <div class="col-md-5">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.email"
            name="email"
            required
          />
        </div>
        <div class="col-md-5">
          <label for="pec" class="form-label">Pec</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.pec"
            name="pec"
            required
          />
        </div>
        <div class="col-md-2">
          <label for="tipoCiente" class="form-label">Tipo Cliente</label>
          <select
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.tipoCliente"
            name="tipoCliente"
            required
          >
            <option *ngFor="let tipo of tipiClienti" value="{{ tipo }}">
              {{ tipo }}
            </option>
          </select>
        </div>
        <hr />
        <div>
          <h5>Sede Operativa</h5>
        </div>
        <div class="col-md-8">
          <label for="via" class="form-label">Via</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeOperativa.via"
            name="via"
            required
          />
          <div class="invalid-feedback">Inserisci un indirizzo valido</div>
        </div>
        <div class="col-md-2">
          <label for="Civico" class="form-label">Civico</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeOperativa.civico"
            name="civico"
            required
          />
          <div class="invalid-feedback">Inserisci un dato valido</div>
        </div>
        <div class="col-md-2">
          <label for="cap" class="form-label">Cap</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeOperativa.cap"
            name="nomeContatto"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="localita" class="form-label">Località</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeOperativa.localita"
            name="localita"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="comune" class="form-label">Comune</label>
          <select
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeOperativa.comune"
            name="comune"
            required
          >
            <option *ngFor="let c of comuni" [ngValue]="c">{{ c.nome }}</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="provincia" class="form-label">Provincia</label>
          <select
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeOperativa.comune.provincia"
            name="tipoCliente"
            required
          >
            <option *ngFor="let p of province" [ngValue]="p">
              {{ p.nome }}
            </option>
          </select>
        </div>
        <hr />
        <div>
          <h5>Sede Legale</h5>
        </div>
        <div class="col-md-8">
          <label for="via" class="form-label">Via</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeLegale.via"
            name="via"
            required
          />
          <div class="invalid-feedback">Inserisci un indirizzo valido</div>
        </div>
        <div class="col-md-2">
          <label for="Civico" class="form-label">Civico</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeLegale.civico"
            name="civico"
            required
          />
          <div class="invalid-feedback">Inserisci un dato valido</div>
        </div>
        <div class="col-md-2">
          <label for="cap" class="form-label">Cap</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeLegale.cap"
            name="nomeContatto"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="localita" class="form-label">Località</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeLegale.localita"
            name="localita"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="comune" class="form-label">Comune</label>
          <select
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeLegale.comune"
            name="comune"
            required
          >
            <option *ngFor="let c of comuni" [ngValue]="c">{{ c.nome }}</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="provincia" class="form-label">Provincia</label>
          <select
            type="text"
            class="form-control"
            [(ngModel)]="nuovoCliente.indirizzoSedeLegale.comune.provincia"
            name="tipoCliente"
            required
          >
            <option *ngFor="let p of province" [ngValue]="p">
              {{ p.nome }}
            </option>
          </select>
        </div>
      </form>
      <div class="col-12">
        <button
          class="btn btn-success my-3"
          type="submit"
          (click)="aggiungiCliente()"
        >
          Crea
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    .card {
      opacity: .95;
      margin-top: 5rem !important;
      margin-bottom: 5rem !important;
    }
  `
  ],
})
export class CreaClientePage implements OnInit {
  constructor(private clientiSrv: ClientiService, private router: Router) {}
  tipiClienti!: Array<string>;
  comuni!: Comune[];
  province!: Provincia[];
  nuovoCliente: Cliente = new Cliente();

  ngOnInit(): void {
    this.getTipiClienti();
    this.getComuni();
    this.getProvince();
  }

  aggiungiCliente() {
    this.clientiSrv.aggiungi(this.nuovoCliente).subscribe((res) => {
      alert('Cliente aggiunto con successo!');
      this.router.navigate(['/clienti']);
    });
  }
  getTipiClienti() {
    this.clientiSrv.tipiClienti().subscribe((res) => {
      this.tipiClienti = res;
    });
  }
  getComuni() {
    this.clientiSrv.comuni().subscribe((res) => {
      this.comuni = res.content;
    });
  }
  getProvince() {
    this.clientiSrv.province().subscribe((res) => {
      this.province = res.content;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../services/clienti.service';
import { Cliente } from '../_models/Cliente';
import { Comune } from '../_models/Comune';
import { Provincia } from '../_models/Provincia';

@Component({
  template: `
    <div class="container bg-dark text-white">
      <h2 class="mb-5">Info Cliente</h2>
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="nomeContatto" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.nomeContatto"
            name="nome"
          />
        </div>
        <div class="col-md-4">
          <label for="cognome" class="form-label">Cognome</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.cognomeContatto"
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
              [(ngModel)]="selCli.telefonoContatto"
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
            [(ngModel)]="selCli.emailContatto"
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
            [(ngModel)]="selCli.ragioneSociale"
            name="ragioneSociale"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="partitaIva" class="form-label">Partita Iva</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.partitaIva"
            name="partitaIva"
            required
          />
        </div>
        <div class="col-md-5">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.email"
            name="email"
            required
          />
        </div>
        <div class="col-md-5">
          <label for="pec" class="form-label">Pec</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.pec"
            name="pec"
            required
          />
        </div>
        <div class="col-md-2">
          <label for="tipoCiente" class="form-label">Tipo Cliente</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.tipoCliente"
            name="tipoCliente"
            required
          />
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
            [(ngModel)]="selCli.indirizzoSedeOperativa.via"
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
            [(ngModel)]="selCli.indirizzoSedeOperativa.civico"
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
            [(ngModel)]="selCli.indirizzoSedeOperativa.cap"
            name="nomeContatto"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="localita" class="form-label">Località</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.indirizzoSedeOperativa.localita"
            name="localita"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="comune" class="form-label">Comune</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.indirizzoSedeOperativa.comune.nome"
            name="comune"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="provincia" class="form-label">Provincia</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.indirizzoSedeOperativa.comune.provincia.nome"
            name="provincia"
            required
          />
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
            [(ngModel)]="selCli.indirizzoSedeLegale.via"
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
            [(ngModel)]="selCli.indirizzoSedeLegale.civico"
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
            [(ngModel)]="selCli.indirizzoSedeLegale.cap"
            name="nomeContatto"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="localita" class="form-label">Località</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.indirizzoSedeLegale.localita"
            name="localita"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="comune" class="form-label">Comune</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.indirizzoSedeLegale.comune.nome"
            name="comune"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="provincia" class="form-label">Provincia</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="selCli.indirizzoSedeLegale.comune.provincia.nome"
            name="provincia"
            required
          />
        </div>
      </form>
      <div class="col-12">
        <button class="btn btn-warning my-3" type="submit" (click)="update()">
          Aggiorna
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      opacity: .95;
      margin-top: 5rem !important;
      margin-bottom: 5rem !important;
    }
  `
  ],
})
export class ModificaClientePage implements OnInit {
  selCli: Cliente = new Cliente();

  constructor(
    private clientiSrv: ClientiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

    id!: number;

  ngOnInit(): void {
      this.route.params.subscribe({
      next: (v) => {
        this.id = v['id'];
      },
      error: (e) => console.error(e),
      complete: () => console.info('id fattura acquisita'),
    });

    this.clientiSrv.getbyID(this.id).subscribe((data: Cliente) => {
      this.selCli = data;
    });
  }

  update() {
    this.clientiSrv.update(this.selCli).subscribe((res) => {
      this.selCli = res.content;
    });
    this.router.navigate(['/dettaglicliente/',this.id]);
  }

}

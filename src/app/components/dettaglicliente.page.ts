import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../services/clienti.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fattura } from '../_models/fattura';
import { Cliente } from '../_models/cliente';

@Component({
  template: `
    <div class="container cartella mt-5">
      <div class="card bg-dark text-white" style="width: 100%; ">
        <div class="card-body px-5">
          <h5 class="card-title text-center">{{ cliente.ragioneSociale }}</h5>
          <h6 class="card-subtitle mb-2  text-center">
            PARTITA IVA: {{ cliente.partitaIva }}
          </h6>
          <div class="container text-center">
            <p class="card-text badge bg-secondary mx-3">
              EMAIL AZIENDALE: {{ cliente.email }}
            </p>
            <p class="card-text badge bg-secondary mx-3">
              EMAIL PEC: {{ cliente.pec }}
            </p>
            <p class="card-text badge bg-secondary mx-3">
              TELEFONO AZIENDALE: {{ cliente.telefono }}
            </p>
            <div class="container">
              <table class="table text-white">
                <thead>
                  <td></td>
                  <td colspan="1"><h3>Contatto:</h3></td>
                  <td></td>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2" class="fw-bold">NOME:</td>
                    <td>
                      {{ cliente.nomeContatto }} {{ cliente.cognomeContatto }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="fw-bold">TELEFONO:</td>
                    <td>{{ cliente.telefonoContatto }}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="fw-bold">E-MAIL:</td>
                    <td>{{ cliente.emailContatto }}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="fw-bold">SEDE OPERATIVA:</td>
                    <td>
                      {{ cliente.indirizzoSedeOperativa.localita }}(
                      {{
                        cliente.indirizzoSedeOperativa.comune.provincia.sigla
                      }}
                      ), {{ cliente.indirizzoSedeOperativa.via }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="fw-bold">SEDE LEGALE:</td>
                    <td>
                      {{ cliente.indirizzoSedeLegale.localita }}(
                      {{ cliente.indirizzoSedeLegale.comune.provincia.sigla }}
                      ), {{ cliente.indirizzoSedeLegale.via }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="container">
                <h3>AZIONI:</h3>
                <div class="row mt-4">
                  <div class="col-3">
                    <button
                      class="btn btn-info"
                      (click)="mostraFatture(cliente.id)"
                    >
                      Mostra fatture
                    </button>
                  </div>
                  <div class="col-3">
                    <button
                      class="btn btn-warning"
                      (click)="openVerticallyCentered(content)"
                    >
                      Aggiungi fattura
                    </button>
                  </div>
                  <div class="col-3">
                    <button
                      class="btn btn-secondary"
                      [routerLink]="['/modificacliente/', this.cliente.id]"
                      routerLinkActive="router-link-active"
                    >
                      Modifica cliente
                    </button>
                  </div>
                  <div class="col-3">
                    <button
                      class="btn btn-danger"
                      (click)="eliminaCliente(this.cliente.id)"
                    >
                      Elimina cliente
                    </button>
                  </div>
                </div>
                <hr />
                <div class="container">
                  <table class="table text-white bg-dark">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Data</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Anno</th>
                        <th scope="col">Importo</th>
                        <th scope="col">Stato</th>
                        <th scope="col">Cliente</th>
                      </tr>
                    </thead>
                    <tbody *ngFor="let fattura of fatture; let i = index">
                      <tr>
                        <th scope="row">{{ fattura.id }}</th>
                        <td>{{ fattura.data | date }}</td>
                        <td>{{ fattura.numero }}</td>
                        <td>{{ fattura.anno }}</td>
                        <td>{{ fattura.importo }}€</td>
                        <td>{{ fattura.stato.nome }}</td>
                        <td>{{ fattura.cliente.ragioneSociale }}</td>
                        <td>
                          <a
                            [routerLink]="['/dettaglifattura/', fattura.id]"
                            routerLinkActive="router-link-active"
                            class="btn btn-primary btn-sm m-2"
                            >Dettagli Fattura</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ng-template #content let-modal>
      <div class="modal-header bg-dark text-white">
        <h4 class="modal-title">Aggiungi fattura</h4>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          (click)="modal.dismiss('Cross click')"
        ></button>
      </div>
      <div class="modal-body bg-dark text-white">
        <form #form="ngForm">
          <div class="form-group">
            <label for="date">Data</label>
            <input
              ngModel
              name="data"
              class="form-control"
              type="date"
              id="data"
            />
          </div>
          <div class="form-group">
            <label for="importo">IMPORTO</label>
            <input
              ngModel
              name="importo"
              class="form-control"
              type="number"
              id="importo"
            />
          </div>
          <div class="form-group">
            <label for="numero">Numero fattura</label>
            <input
              ngModel
              name="numero"
              class="form-control"
              type="number"
              id="numero"
            />
          </div>
          <div class="form-group">
            <label for="anno">Anno</label>
            <input
              ngModel
              name="anno"
              class="form-control"
              type="number"
              id="anno"
            />
          </div>
          <div class="form-group mt-3">
            <label for="numero" class="mx-4">Stato</label>
            <select ngModel name="stato" id="stato">
              <option value="2">PAGATA</option>
              <option value="1">NON PAGATA</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer bg-dark text-white">
        <button
          type="button"
          class="btn btn-primary"
          (click)="modal.close('Close click')"
        >
          ANNULLA
        </button>
        <button
          type="button"
          class="btn btn-warning"
          (click)="onAggiunta(form)"
        >
          AGGIUNGI FATTURA
        </button>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .cartella {
        opacity: 0.95;
        margin-top: 5rem !important;
        margin-bottom: 5rem !important;
      }
    `,
  ],
})
export class DettagliclientePage implements OnInit {
  cliente!: any;
  fatture!: any;
  nuovaFattura!: Fattura;
  data!: number;
  constructor(
    private clientiSrv: ClientiService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.clientiSrv.getbyID(id).subscribe((res) => {
        this.cliente = res;
        this.data = this.cliente.id;
      });
    });
  }

  mostraFatture(a: number) {
    this.clientiSrv.getbyCliente(a).subscribe((res) => {
      this.fatture = res.content;
    });
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  onAggiunta(dati: any) {
    this.nuovaFattura = {
      id: 0,
      numero: 0,
      anno: 0,
      importo: 0,
      data: '',
      stato: { id: 0, nome: '' },
      cliente: {},
    };
    this.nuovaFattura.anno = dati.value.anno;
    this.nuovaFattura.data = dati.value.data;
    this.nuovaFattura.importo = dati.value.importo;
    this.nuovaFattura.numero = dati.value.numero;
    this.nuovaFattura.stato.id = dati.value.stato;
    this.nuovaFattura.cliente.id = this.cliente.id;
    this.clientiSrv.creaFattura(this.nuovaFattura).subscribe((res) => {
      this.modalService.dismissAll();
      alert('Fattura aggiunta con successo!');
      this.mostraFatture(this.cliente.id);
    });
  }
  eliminaCliente(data: number) {
    this.clientiSrv.eliminaFatture(data).subscribe((res) => {
      this.clientiSrv.eliminaCliente(data).subscribe((bene) => {
        console.log(bene);
        alert('Cliente eliminato!');
        this.router.navigate(['/clienti']);
      });
    });
  }
}

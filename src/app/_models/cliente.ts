import { Comune } from './Comune';
import { Sede } from './Sede';

export class Cliente {
  id!: number;
  ragioneSociale!: string;
  partitaIva!: number;
  tipoCliente!: string;
  email!: string;
  pec!: string;
  telefono!: string;
  nomeContatto!: string;
  cognomeContatto!: string;
  telefonoContatto!: string;
  emailContatto!: string;
  indirizzoSedeOperativa: Sede = new Sede();
  indirizzoSedeLegale: Sede = new Sede();
}

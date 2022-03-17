import { Comune } from './Comune';

export class Sede {
  id!: number;
  via!: string;
  civico!: number;
  cap!: number;
  localita!: string;
  comune: Comune = new Comune();
}

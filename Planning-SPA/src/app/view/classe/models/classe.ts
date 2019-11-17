import { Prof } from './../../prof/models/prof';
import { Eleve } from '../../eleve/models/eleve';
export class Classe {
  id: number;
  niveauName: string;
  anneeName: string;
  professeurs: Prof[];
  eleves: Eleve[];

  constructor(
    public nom: string,
    public niveauId: number,
    public anneeId: number,
  ) {
    this.id = 0;
  }

}


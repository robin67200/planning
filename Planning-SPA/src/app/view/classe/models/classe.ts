import { Prof } from './../../prof/models/prof';
import { Eleve } from '../../eleve/models/eleve';
import { Cours } from '../../cours/models/cours';
export class Classe {
  id: number;
  niveauName: string;
  anneeName: string;
  professeurs: Prof[];
  eleves: Eleve[];
  cours: Cours[];

  constructor(
    public nom: string,
    public niveauId: number,
    public anneeId: number,
  ) {
    this.id = 0;
  }

}


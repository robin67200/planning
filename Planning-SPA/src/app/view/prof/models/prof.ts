import { Matiere } from './../../matiere/models/matiere';
import { Classe } from '../../classe/models/classe';
import { Cours } from '../../cours/models/cours';
export class Prof {
  id: number;
  matieres: Matiere[];
  classes: Classe[];
  cours: Cours[];
  constructor(
    public nom: string,
    public prenom: string,
    public adresse: string,
    public mail: string,
    public telephone: number,
  ) {
    this.id = 0;
  }



}


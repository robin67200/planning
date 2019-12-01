export class Eleve {
  id: number;
  classeName: string;

  constructor(
    public nom: string,
    public prenom: string,
    public adresse: string,
    public mail: string,
    public telephone: string,
    public dateNaissance: Date,
    public classeId: number,

  ) {
    this.id = 0;
  }

}


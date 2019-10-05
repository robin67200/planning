export class Eleve {
  id: number;

  constructor(
    public nom: string,
    public prenom: string,
    public adresse: string,
    public mail: string,
    public telephone: number,
    public dateNaissance: Date,
    public classeId: number,

  ) {
    this.id = 0;
  }

}


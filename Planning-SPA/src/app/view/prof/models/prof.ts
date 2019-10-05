export class Prof {
  id: number;

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


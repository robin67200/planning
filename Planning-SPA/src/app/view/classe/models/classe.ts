export class Classe {
  id: number;
  niveauName: string;
  anneeName: string;

  constructor(
    public nom: string,
    public niveauId: number,
    public anneeId: number,
  ) {
    this.id = 0;
  }

}


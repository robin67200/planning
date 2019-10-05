export class Niveau {
  id: number;

  constructor(
    public title: string,
    public contenu: number,
    public start: number,
    public end: number,
    public color: string,
    public professeurId: number,
    public matiereId: number,
    public anneeId: number

  ) {
    this.id = 0;
  }

}


export class Cours {
  id: number;

  constructor(
    public title: string,
    public contenu: string,
    public date: Date,
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


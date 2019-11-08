export class Cours {
  id: number;

  constructor(
    public title: string,
    public contenu: string,
    public date: Date,
    public start: Date,
    public end: Date,
    public color: string,
    public professeurId: number,
    public matiereId: number,
    public anneeId: number

  ) {
    this.id = 0;
  }

}


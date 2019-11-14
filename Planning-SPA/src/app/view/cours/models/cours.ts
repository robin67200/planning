export class Cours {
  id: number;

  constructor(
    public title: string,
    public room: string,
    public date: Date,
    public start: Date,
    public end: Date,
    public color: string,
    public professeurId: number,
    public matiereId: number,
    public classeId: number

  ) {
    this.id = 0;
  }

}


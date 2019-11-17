export class Cours {
  id: number;

  constructor(
    public title: string,
    public room: string,
    public start: Date,
    public end: Date,
    public color: any,
    public color2: any,
    public professeurId: number,
    public matiereId: number,
    public classeId: number

  ) {
    this.id = 0;
  }

}


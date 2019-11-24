export class Indisponibilite {
  id: number;
  profName: string;

  constructor(
    public start: Date,
    public end: Date,
    public professeurId: number

  ) {
    this.id = 0;
  }

}

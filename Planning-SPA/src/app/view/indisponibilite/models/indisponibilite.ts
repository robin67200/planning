export class Indisponibilite {
  id: number;
  profName: string;

  constructor(
    public date: Date,
    public professeurId: number

  ) {
    this.id = 0;
  }

}

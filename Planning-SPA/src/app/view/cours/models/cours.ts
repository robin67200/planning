export class Cours {
  map(arg0: (cours: any) => { id: any; start: Date; end: Date; title: any; room: any; actions: import("calendar-utils").EventAction[]; color: { primary: any; secondary: any; }; professeurId: any; matiereId: any; }): import("calendar-utils").CalendarEvent<any>[] {
    throw new Error("Method not implemented.");
  }
  id: number;
  profName: string;
  matiereName: string;

  constructor(
    public title: string,
    public room: string,
    public start: Date,
    public end: Date,
    public color: any,
    public color2: any,
    public professeurId: number,
    public matiereId: number,

  ) {
    this.id = 0;
  }

}


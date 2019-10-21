import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppSettings {
  static settings: IAppSettings;
  constructor(private http: HttpClient) {}
  load() {
    const jsonFile = './../../assets/settings.json';
    return this.http
      .get(jsonFile)
      .pipe(
        map(response => {
          AppSettings.settings = response as IAppSettings;
        })
      )
      .toPromise();
  }
}

export interface IAppSettings {
  ApiUrl: string;
}

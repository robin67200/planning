import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_COMPONENTS = [  ];

const APP_MODULES = [
];

@NgModule({
  declarations: [ APP_COMPONENTS ],
  imports: [ APP_MODULES ],
  providers: [
  ],
  entryComponents: [],
  exports: [ APP_MODULES, APP_COMPONENTS ]
})
export class AppSharedModule {}

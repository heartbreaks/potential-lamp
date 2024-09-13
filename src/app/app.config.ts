import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TuiRootModule} from "@taiga-ui/core";
import {provideAnimations} from "@angular/platform-browser/animations";
import {TuiIslandModule} from "@taiga-ui/kit";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      TuiRootModule,
      TuiIslandModule,
    ),
  ]
};

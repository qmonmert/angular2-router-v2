import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2RouterV2AppComponent, environment, AppRouterProvider } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2RouterV2AppComponent, [AppRouterProvider]);

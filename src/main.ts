import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
//import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,  {
  providers: [provideHttpClient()]
});
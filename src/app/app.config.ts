import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptorService } from './service/api-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  provideHttpClient(withFetch(),withInterceptorsFromDi()),{
    provide:HTTP_INTERCEPTORS,
    useClass:ApiInterceptorService,
    multi:true
} ,provideClientHydration()]
};
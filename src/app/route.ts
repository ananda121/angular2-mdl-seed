import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';
import { SigninComponent } from './features/signin/signin';
import { HomeComponent } from './features/home/home';

const routes: RouterConfig = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
@Component({
    selector: 'as-main-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }

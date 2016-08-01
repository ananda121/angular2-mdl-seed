import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MDL_DIRECTIVES } from 'angular2-mdl';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/features/signin/signin.html',
    styleUrls: ['app/features/signin/signin.css'],
    directives: [MDL_DIRECTIVES]
})

export class SigninComponent {
    isDisabled: boolean = false;
    clickCounter: number = 0;

    photo = 'app/images/signin_bg.png';

  constructor(private _router: Router) {
    }
    login() {
                 this._router.navigate(['home']);
    }
}

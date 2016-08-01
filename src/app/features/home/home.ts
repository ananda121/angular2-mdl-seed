import { Component } from '@angular/core';
import { MDL_DIRECTIVES } from 'angular2-mdl';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/features/home/home.html',
    styleUrls: ['app/features/home/home.css'],
    directives: [MDL_DIRECTIVES]
})

export class HomeComponent {
    menuList = [
        {
            'title' : 'STUDENT INFO',
            'icon' : 'fa fa-user'
        },
        {
            'title' : 'FEES',
            'icon' : 'fa fa-rupee'
        },
        {
            'title' : 'EXAMINATION',
            'icon' : 'fa fa-file-text-o'
        },
        {
            'title' : 'COMPLAINTS',
            'icon' : 'fa fa-thumbs-down'
        },
        {
            'title' : 'NOTIFICATIONS',
            'icon' : 'fa fa-clock-o'
        },
        {
            'title' : 'CALENDAR',
            'icon' : 'fa fa-calendar'
        },
        {
            'title' : 'GALLERY',
            'icon' : 'fa fa-file-image-o'
        }
    ];
}




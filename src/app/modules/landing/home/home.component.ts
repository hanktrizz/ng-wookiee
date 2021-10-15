import { Component } from '@angular/core';
import translations from '../../../shared/translations/en.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    label = translations.DASHBOARD.LABEL;
    constructor() {
        // do nothing for now
    }
}

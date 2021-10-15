import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import translations from '../../../shared/translations/en.json';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    desktopLayout = [
        {
            title: translations.DASHBOARD.LANDING_CARDS.UNIVERSE_CARD_LABEL,
            cols: 2,
            rows: 1,
            content: 'Here, you will get a crash course on Star Wars.',
        },
        {
            title: translations.DASHBOARD.LANDING_CARDS.PLANET_CARD_LABEL,
            cols: 1,
            rows: 1,
            content: 'All the plants ever visited!',
        },
        {
            title: translations.DASHBOARD.LANDING_CARDS.FEATURED_CHARACTER_CARD_LABEL,
            cols: 1,
            rows: 2,
            content: 'Today, the feature character is Anakin Skywalker.',
        },
        {
            title: translations.DASHBOARD.LANDING_CARDS.QUICK_STATS_CARD_LABEL,
            cols: 1,
            rows: 1,
            content: 'Days since the last movie in franchise: 700 ish days I guess.',
        },
    ];

    mobileLayout = [
        {
            title: translations.DASHBOARD.LANDING_CARDS.UNIVERSE_CARD_LABEL,
            cols: 2,
            rows: 1,
            content: 'Here, you will get a crash course on Star Wars.',
        },
        {
            title: translations.DASHBOARD.LANDING_CARDS.PLANET_CARD_LABEL,
            cols: 1,
            rows: 1,
            content: 'All the plants ever visited!',
        },
        {
            title: translations.DASHBOARD.LANDING_CARDS.FEATURED_CHARACTER_CARD_LABEL,
            cols: 1,
            rows: 2,
            content: 'Today, the feature character is Anakin Skywalker.',
        },
        {
            title: translations.DASHBOARD.LANDING_CARDS.QUICK_STATS_CARD_LABEL,
            cols: 2,
            rows: 1,
            content: 'Days since the last movie in franchise: 700 ish days I guess.',
        },
    ];
    // Introduce responsive behaviour
    cards$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
            if (matches) return this.mobileLayout;

            return this.desktopLayout;
        })
    );

    constructor(private breakpointObserver: BreakpointObserver) {}
}

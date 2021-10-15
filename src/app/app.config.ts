import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILink } from './shared/interfaces/link.interface';

const routeConfig: ILink[] = [
    { routerLink: '/landing', label: 'Galactic Dashboard', icon: 'dashboard' },
    { routerLink: '/characters', label: 'Characters', icon: 'face' },
];

export interface IAppConfig {
    StarWarsApiBaseUrl: string;
    AppLogoResourceUrl: string;
    ApplicationTitle: string;
    PrimaryNavigationConfig: ILink[];
    RetryPolicy: number;
}

export const AppConfig: IAppConfig = {
    StarWarsApiBaseUrl: environment.SWAPI_BASE_URL,
    AppLogoResourceUrl: environment.LOGO_URL,
    ApplicationTitle: 'Ng Wookiee',
    PrimaryNavigationConfig: routeConfig,
    RetryPolicy: 2,
};

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

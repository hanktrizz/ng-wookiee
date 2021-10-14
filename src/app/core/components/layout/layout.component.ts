import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result) => result.matches),
        shareReplay()
    );

    constructor(@Inject(APP_CONFIG) public appConfig: IAppConfig, private breakpointObserver: BreakpointObserver) {}
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './core/app-material/app-material.module';

import { AppConfig, APP_CONFIG } from './app.config';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './shared/services/error-interceptor.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [AppComponent, LayoutComponent, PageNotFoundComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        AppMaterialModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: APP_CONFIG,
            useValue: AppConfig,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

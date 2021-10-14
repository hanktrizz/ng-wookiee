import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppConfig, APP_CONFIG } from './app.config';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, LayoutComponent, HomeComponent],
    imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, AppMaterialModule, AppRoutingModule],
    providers: [
        {
            provide: APP_CONFIG,
            useValue: AppConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

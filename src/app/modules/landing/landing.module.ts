import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMaterialModule } from 'src/app/core/app-material/app-material.module';

@NgModule({
    declarations: [HomeComponent, DashboardComponent],
    imports: [CommonModule, LandingRoutingModule, AppMaterialModule],
})
export class LandingModule {}

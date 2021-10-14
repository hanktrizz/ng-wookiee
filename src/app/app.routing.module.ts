import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'landing', component: HomeComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    // { path: '**' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes), CommonModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

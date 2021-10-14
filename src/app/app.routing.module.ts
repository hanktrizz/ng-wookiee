import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule) },
    {
        path: 'characters',
        loadChildren: () => import('./modules/characters/characters.module').then((m) => m.CharactersModule),
    },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes), CommonModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

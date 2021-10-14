import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
    declarations: [HomeComponent, CharacterListComponent, CharacterDetailComponent],
    imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}

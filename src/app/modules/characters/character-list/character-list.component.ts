import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, of } from 'rxjs';
import { startWith, switchMap, catchError, map, finalize } from 'rxjs/operators';
import { IPeople } from 'src/app/shared/interfaces/people.interface';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css'],
})
/**
 * Displays a list of characters aka People. A bit of interchangeable usage going on :)
 */
export class CharacterListComponent implements AfterViewInit {
    // requirement from second user story
    FILM_ID: string = '1';

    // could potentially make this dynamic in the future
    displayedColumns: string[] = [
        'name',
        'height',
        'mass',
        'hair_color',
        'skin_color',
        'eye_color',
        'birth_year',
        'gender',
    ];

    data: IPeople[] = [];

    resultsLength = 0;
    isLoadingResults = true;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    getIdFromUrl = (url: string) =>
        url
            .split('/')
            .filter((token) => token !== '')
            .pop();

    constructor(private filmService: FilmService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngAfterViewInit() {
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.filmService!.getCharactersFromFilm(this.FILM_ID).pipe(catchError(() => of(null)));
                }),
                map((data) => {
                    if (data === null) {
                        return [];
                    }

                    // Only refresh the result length if there is new data.
                    this.resultsLength = data.length;
                    return data;
                }),
                finalize(() => (this.isLoadingResults = false))
            )
            .subscribe((data) => {
                this.data = data;
                console.log(data);
            });
    }

    onRowClick(row: IPeople) {
        const characterId = this.getIdFromUrl(row.url);
        this.router.navigate([characterId], { relativeTo: this.activatedRoute });
    }
}

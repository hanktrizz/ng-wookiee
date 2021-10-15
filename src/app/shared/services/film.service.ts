import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { concatMap, map, pluck } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';
import { IFilm } from '../interfaces/film.interface';
import { IPeople } from '../interfaces/people.interface';
import { IResourceService } from '../interfaces/resource-service.interface';
import { IDataPayload } from '../interfaces/resource.interface';

@Injectable({
    providedIn: 'root',
})
export class FilmService implements IResourceService<IFilm> {
    private getFilmsEndpoint = `${this.appConfig.StarWarsApiBaseUrl}films`;
    constructor(@Inject(APP_CONFIG) private appConfig: IAppConfig, private http: HttpClient) {}

    getMany(): Observable<IFilm[]> {
        return this.http.get<IDataPayload>(this.getFilmsEndpoint).pipe(map((result) => result.results as IFilm[]));
    }

    getOne(filmId: string): Observable<IFilm> {
        return this.http.get<IFilm>(`${this.getFilmsEndpoint}/${filmId}`);
    }

    getCharactersFromFilm(filmId: string): Observable<IPeople[]> {
        return this.getOne(filmId).pipe(
            pluck('characters'),
            concatMap((characterUrls) => forkJoin(characterUrls.map((url) => this.http.get<IPeople>(url))))
        );
    }
}

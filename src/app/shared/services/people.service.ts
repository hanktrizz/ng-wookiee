import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';
import { IPeople } from '../interfaces/people.interface';
import { IResourceService } from '../interfaces/resource-service.interface';
import { IDataPayload } from '../interfaces/resource.interface';

@Injectable({
    providedIn: 'root',
})
export class PeopleService implements IResourceService<IPeople> {
    private getPeopleEndpoint = `${this.appConfig.StarWarsApiBaseUrl}/people`;
    constructor(@Inject(APP_CONFIG) private appConfig: IAppConfig, private http: HttpClient) {}

    getMany(): Observable<IPeople[]> {
        return this.http.get<IDataPayload>(this.getPeopleEndpoint).pipe(map((result) => result.results as IPeople[]));
    }

    getOne(id: string): Observable<IPeople> {
        const url = `${this.getPeopleEndpoint}/${id}`;
        return this.http.get<IPeople>(url);
    }

    getOneByRawUrl(url: string): Observable<IPeople> {
        return this.http.get<IPeople>(url);
    }
}

import { Observable } from 'rxjs';

export interface IResourceService<T> {
    getMany(): Observable<T[]>;
    getOne?(...args: string[]): Observable<T>;
    getOneByRawUrl?(url: string): Observable<T>;
}

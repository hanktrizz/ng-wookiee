import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { PeopleService } from 'src/app/shared/services/people.service';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
    character$!: Observable<any[]>;
    isLoading: boolean = true;

    constructor(private peopleService: PeopleService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.character$ = this.route.paramMap.pipe(
            switchMap((params) => {
                const id: any = params.get('id');
                return this.peopleService.getOne(id);
            }),
            tap(() => (this.isLoading = false)),
            map((people) => {
                return Object.entries(people);
            })
        );
    }
}

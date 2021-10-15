import { IResource } from './resource.interface';

export interface ISpecies extends IResource {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: Array<string>;
    films: Array<string>;
}
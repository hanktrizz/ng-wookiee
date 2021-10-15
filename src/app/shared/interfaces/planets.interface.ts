import { IResource } from './resource.interface';

export interface IPlanet extends IResource {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: Array<string>;
    films: Array<string>;
}

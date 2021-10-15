export interface IResource {
    created: Date;
    edited: Date;
    url: string;
}

export interface IDataPayload {
    count: number;
    next: string;
    previous: string;
    results: Array<IResource>;
}

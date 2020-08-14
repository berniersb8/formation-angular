export interface BeerModel {
    id: number;
    name: string;
    description: string;
}

export function getDefaultBeerModel(): BeerModel {
    return {
        id: null,
        name: null,
        description: null
    };
}

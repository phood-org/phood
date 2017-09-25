export interface Recipe {
    Id: number;
    Name: string;
    CookTime?: number;
    CookUnit?: string;
    Instructions?: string;
    Yield?: string;
    ServeMin?: number;
    ServeMax?: number;
}

export interface RecipePayload {
    Id?: number;
    Ids?: number[];
    Recipe?: Recipe;
    Search?: string;
    Page?: number;
}

export interface RecipeState {
    loading: boolean;
    pages: {
        [searchString: string]: number[]
    };
    recipes: Recipe[];
}

export interface ApiWrapper<T> {
    IsSuccess: boolean;
    FormattedMessage: string[];
    Data: T;
}

export interface Recipe {
    Id: number;
    Name: string;
    CookTime?: number;
    CookUnit?: string;
    Instructions?: string;
    Yield?:  string;
    ServeMin?: number;
    ServeMax?: number;
}

export interface RecipePayload {
    Id?: number;
    Ids?: number[];
    Recipe?: Recipe;
}

export interface RecipeState {
    loading: boolean;
    recipes: Recipe[];
}
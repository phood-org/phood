import { ActionWithPayload } from '../app.models';
import { Recipe, RecipePayload } from './recipes.models';

export const ADD_RECIPE = 'ADD_RECIPE';
export const NEW_RECIPE = 'NEW_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';
export const ADD_PAGE = 'ADD_PAGE';
export const SET_LOADING = 'SET_LOADING';
export const REMOVE_LOADING = 'REMOVE_LOADING';

export function addRecipe(recipe: Recipe): ActionWithPayload<RecipePayload> {
    return {
        type: ADD_RECIPE,
        payload: {
            Recipe: recipe
        }
    };
}

export function newRecipe(recipe: Recipe): ActionWithPayload<RecipePayload> {
    return {
        type: NEW_RECIPE,
        payload: {
            Recipe: recipe
        }
    }
}

export function getRecipes(search?: string): ActionWithPayload<RecipePayload> {
    return {
        type: GET_RECIPES,
        payload: {
            Search: search || ''
        }
    };
}

export function addPage(search: string, page: number): ActionWithPayload<RecipePayload> {
    return {
        type: ADD_PAGE,
        payload: {
            Page: page,
            Search: search
        }
    };
}

export function setLoading(loadingId: string): ActionWithPayload<RecipePayload> {
    return {
        type: SET_LOADING,
        payload: {
            LoadingId: loadingId
        }
    };
}

export function removeLoading(loadingId: string): ActionWithPayload<RecipePayload> {
    return {
        type: REMOVE_LOADING,
        payload: {
            LoadingId: loadingId
        }
    };
}

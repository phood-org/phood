import { ActionWithPayload } from '../app.models';
import { Recipe, RecipePayload } from './recipes.models';

export const ADD_RECIPE = "ADD_RECIPE";
export const GET_RECIPE_FROM_DB = "GET_RECIPE_FROM_DB";

export function addRecipe(recipe: Recipe): ActionWithPayload<RecipePayload> {
    return {
        type: ADD_RECIPE,
        payload: {
            Recipe: recipe
        }
    }
}

export function getRecipeFromDb(recipeId: number): ActionWithPayload<RecipePayload> {
    return {
        type: GET_RECIPE_FROM_DB,
        payload: {
            Id: recipeId
        }
    }
}
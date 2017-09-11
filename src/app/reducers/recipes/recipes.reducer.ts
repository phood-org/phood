import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../app.models';
import * as recipeModels from './recipes.models';
import * as recipeActions from './recipes.actions';
// import * as userActions from './user.actions';

const initialState: recipeModels.RecipeState = {
    loading: false,
    recipes: [
        { Id: 2, Name: "Not a Recipe", Instructions: "Open a cider. Enjoy." }
    ]
}

export function recipeReducer(state: recipeModels.RecipeState = initialState, action: ActionWithPayload<recipeModels.RecipePayload>) {
    switch (action.type) {
        case (recipeActions.ADD_RECIPE):
            return { ...state, recipes: [...state.recipes, action.payload] }
        case (recipeActions.GET_RECIPE_FROM_DB):
            return {...state}
        default:
            return state;
    }
}
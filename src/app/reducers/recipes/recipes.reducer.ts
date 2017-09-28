import { Action } from '@ngrx/store';
import _ from 'lodash';

import { ActionWithPayload } from '../app.models';
import * as recipeModels from './recipes.models';
import * as recipeActions from './recipes.actions';
// import * as userActions from './user.actions';

const initialState: recipeModels.RecipeState = {
    loading: [],
    pages: {},
    recipes: [
        { Id: 2, Name: 'Not a Recipe', Instructions: 'Open a cider. Enjoy.' }
    ]
};

export function recipeReducer(state: recipeModels.RecipeState = initialState, action: ActionWithPayload<recipeModels.RecipePayload>) {
    switch (action.type) {
        case (recipeActions.ADD_RECIPE):
            return { ...state, recipes: _([action.payload.Recipe]).unionBy(state.recipes, (r) => r.Id).sortBy((r) => r.Id).value() };
        case (recipeActions.GET_RECIPE_FROM_DB):
            return { ...state };
        case (recipeActions.ADD_PAGE):
            let newPages = { ...state.pages };
            let oldPages = state.pages[action.payload.Search] ? state.pages[action.payload.Search] : [];
            newPages[action.payload.Search] = _.sortedUniq([...oldPages, action.payload.Page]);
            return { ...state, pages: newPages };
        case (recipeActions.SET_LOADING):
            return { ...state, loading: [...state.loading, action.payload.LoadingId] };
        case (recipeActions.REMOVE_LOADING):
            return { ...state, loading: _.filter(state.loading, (x) => x !== action.payload.LoadingId) };
        default:
            return state;
    }
}

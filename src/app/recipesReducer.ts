import { ActionReducer, Action } from '@ngrx/store';
import _ from 'lodash';

import { Recipe } from './types';

export const GETRECIPES = 'GETRECIPES';

export function recipeReducer(state: Recipe[] = [], action: Action) {
    switch (action.type) {
        case GETRECIPES:
            return _.uniqBy(state.concat(action.payload), (obj: Recipe) => obj.Id);
        default:
            return state;
    }
}

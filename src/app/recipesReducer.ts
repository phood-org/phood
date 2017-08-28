import { ActionReducer, Action } from "@ngrx/store";

import {PhoodChef} from "./phoodchef.service";

export const GETRECIPES = "GETRECIPES";

export function recipeReducer(state: Array<any> = [], action: Action) {
    switch(action.type) {
        case GETRECIPES:
            return state.concat(action.payload);
        default:
            return state;
    }
}
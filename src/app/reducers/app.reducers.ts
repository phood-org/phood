import { userReducer } from './user/user.reducer';
import { recipeReducer } from './recipes/recipes.reducer';

export interface IReducers {
    user;
    recipes;
}

export const reducers: IReducers = {
    user: userReducer,
    recipes: recipeReducer
};

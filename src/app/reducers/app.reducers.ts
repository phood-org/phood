import { userReducer } from './user/user.reducer';
import { recipeReducer } from './recipes/recipes.reducer'

export interface iReducers {
    user,
    recipes
}

export const reducers: iReducers = {
    user: userReducer,
    recipes: recipeReducer
}
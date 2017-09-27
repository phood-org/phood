import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import axios from 'axios';
import _ from 'lodash';

import { IReducers } from '../app.reducers';
import * as recipeActions from './recipes.actions';
import * as recipeModels from './recipes.models';
import { ActionWithPayload } from '../app.models';
import { RecipeState } from './recipes.models';
import { RecipesService } from './recipes.service';

@Injectable()
export class RecipesEffect {
    @Effect()
    public getRecipes = this.actions$
        .ofType(recipeActions.GET_RECIPES)
        .map(toPayload)
        .withLatestFrom<recipeModels.RecipePayload, recipeModels.RecipeState>(this.store.select((x) => x.recipes))
        .mergeMap<[recipeModels.RecipePayload, recipeModels.RecipeState], ActionWithPayload<recipeModels.RecipePayload>>(([payload, store], i) => {
            let nextPage = store.pages[payload.Search] !== undefined ? _.max(store.pages[payload.Search]) + 1 : 1;
            return Observable
                .fromPromise(this.recipesService.getRecipes(nextPage, payload.Search))
                .mergeMap<recipeModels.ApiWrapper<recipeModels.Recipe[]>, ActionWithPayload<recipeModels.RecipePayload>>((result) => {
                    let test = result.Data.map((recipe) => {
                        return recipeActions.addRecipe(recipe);
                    });
                    if (test.length > 0) {
                        test.push(recipeActions.addPage(payload.Search, nextPage));
                    }

                    return test;
                });
        });

    constructor(
        private actions$: Actions,
        private store: Store<IReducers>,
        private recipesService: RecipesService) {

    }
}

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
        // .withLatestFrom<Action, recipeModels.RecipeState>(this.store)
        .mergeMap<recipeModels.RecipePayload, ActionWithPayload<recipeModels.RecipePayload>>((payload, i) => {
            let recipesToAdd: recipeModels.Recipe[];
            return Observable
                .fromPromise(this.recipesService.getRecipes(payload.Page, payload.Search))
                .mergeMap<recipeModels.ApiWrapper<recipeModels.Recipe[]>, ActionWithPayload<recipeModels.RecipePayload>>((result) => {
                    let test = result.Data.map((recipe) => {
                        return recipeActions.addRecipe(recipe);
                    }).concat([
                        recipeActions.addPage(payload.Search, payload.Page)
                    ]);
                    return test;
                });
        });

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private recipesService: RecipesService) {

    }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import axios from 'axios';

import { AppState, InternalStateType } from './app.service';
import { GETRECIPES } from './recipesReducer';
import { Recipe } from './types';

@Injectable()
export class PhoodChef {
    private axiosClient = axios.create({
        baseURL: 'http://phoodchef.azurewebsites.net/api'
    });

    constructor(
        public appState: AppState,
        private store: Store<any>
    ) {
    }

    public getRecipes(): Promise<void> {
        return this.axiosClient.get('recipes')
            .then((response) => {
                let recipes: Recipe[] = response.data;
                console.log('Received data from api');
                console.dir(recipes);

                this.store.dispatch({type: GETRECIPES, payload: recipes});
            });
    };

}

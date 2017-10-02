import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { AxiosInstance, AxiosPromise } from 'axios';

import * as recipeModels from './recipes.models';

@Injectable()
export class RecipesService {
    public axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://phoodchef.azurewebsites.net/api',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    public getRecipes(page: number, search?: string): Promise<recipeModels.ApiWrapper<recipeModels.Recipe[]>> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.get('recipes', {
                params: {
                    page,
                    search: search || ''
                }
            })
                .then((res) => {
                    console.debug('Response From PhoodChef: ', res.data);
                    resolve(res.data);
                })
                .catch((res) => {
                    console.log('PhoodChef API Failure...');
                    reject(res.data);
                });
        });
    }

    public newRecipe(recipe: recipeModels.Recipe): Promise<recipeModels.ApiWrapper<recipeModels.Recipe>> {
        return new Promise((resolve, reject) => {
            this.axiosInstance.post('recipes', recipe)
                .then((res) => {
                    console.debug('Response From PhoodChef: ', res.data);
                    resolve(res.data);
                })
                .catch((res) => {
                    console.log('PhoodChef API Failure...');
                    reject(res.data);
                });
        });
    }
}

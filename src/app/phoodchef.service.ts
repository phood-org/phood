import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppState, InternalStateType } from './app.service';
import { GETRECIPES } from './recipesReducer';

import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoodChef {
    private apiUrl = 'http://phoodchef.azurewebsites.net/api/recipes';

    constructor(
        public appState: AppState,
        private http: Http,
        private store: Store<any>
    ) {
    }

    public getRecipes(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl).map((res: Response) => res.json())
            .subscribe((data) => {
                console.log('Received data from api');
                console.dir(data);

                this.store.dispatch({type: GETRECIPES, payload: data});
                resolve("It Worked I Hope");
            });
        }
    }


}

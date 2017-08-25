import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppState, InternalStateType } from './app.service';
import 'rxjs/add/operator/map';


@Injectable()
export class PhoodChef {
    private apiUrl = "http://phoodchef.azurewebsites.net/api/recipes"

    constructor(
        public appState: AppState,
        private http: Http
    ) { }

    getRecipes() {
        this.http.get(this.apiUrl).map((res: Response) => res.json())
            .subscribe(data => {
                console.log("Received data from api");
                console.dir(data);
                this.appState.set("recipes", data)
            })
    }
}
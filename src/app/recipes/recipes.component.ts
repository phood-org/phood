import {
    Component,
    OnInit
  } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

import { AppState } from '../app.service';
import { PhoodChef } from '../phoodchef.service';

import { Store } from '@ngrx/store';
import { GETRECIPES } from '../recipesReducer';

import { Recipe } from '../types';

  @Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: 'ngdb-modal-basic',  // <home></home>
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [],
    /**
     * Our list of styles in our component. We may add more to compose many styles together.
     */
    styleUrls: [  ],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    templateUrl: './recipes.component.html'
  })
  export class RecipesComponent implements OnInit {
    /**
     * Set our default values
     */
    public model: any;
    public allRecipes: Observable<Recipe>;
    public searchText: string;
    public filteredRecipes: Observable<Recipe>;

    public localState = { 
     };
    /**
     * TypeScript public modifiers
     */
    constructor(
      public appState: AppState,
      public phoodChef: PhoodChef,
      private store: Store<any>
    ) {
      this.allRecipes = store.select('recipes');
      // this.filteredRecipes = this.allRecipes.map((r) => r.filter((recipe) => this.searchText.indexOf(r.Name) > -1);
    }

    public ngOnInit() {
      console.log('hello `Recipes` component');
      /**
       * this.title.getData().subscribe(data => this.data = data);
       */
    }

    public getRecipes() {
      this.phoodChef.getRecipes().then(() => console.log('Recieved Promise'));
    }

    public consoleLocalState() {
      console.dir(this.recipes);
    }

    public submitState(value: string) {
      console.log('submitState', value);
      this.appState.set('value', value);
      // this.localState.value = '';
    }
  }

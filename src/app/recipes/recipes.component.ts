import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import _ from 'lodash';

import { Recipe, RecipeState } from '../reducers/recipes/recipes.models';
import * as recipeActions from '../reducers/recipes/recipes.actions';
import { IReducers } from '../reducers/app.reducers';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'recipes'.
   */
  selector: 'recipes',  // <recipes></recipes>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './recipes.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  public recipes: Recipe[];
  public filteredRecipes: Recipe[];
  public nextPage: number;
  public searchText: string;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public store: Store<IReducers>
  ) {
    this.store.select<RecipeState>((state) => state.recipes).subscribe((r) => {
      this.recipes = r.recipes;
      this.filteredRecipes = this.recipes.filter((x) => _.includes(x.Name, this.searchText));
    });
    this.nextPage = 2;
    this.store.dispatch(recipeActions.getRecipes(1));
    // this.nextPage = 2;
  }

  public ngOnInit() {
    console.log('hello `Recipes` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public nextPageClick() {
    this.store.dispatch(recipeActions.getRecipes(1, this.searchText.length > 0 ? this.searchText : undefined));
    this.nextPage += 1;
  }
}

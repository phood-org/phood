import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';

import { Recipe, RecipeState } from '../reducers/recipes/recipes.models';
import * as recipeActions from '../reducers/recipes/recipes.actions';
import { iReducers } from '../reducers/app.reducers';

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
  /**
   * TypeScript public modifiers
   */
  constructor(
    public store: Store<iReducers>
  ) {
    this.store.select<RecipeState>(state => state.recipes).subscribe(r => {
      this.recipes = r.recipes;
    })
  }

  public ngOnInit() {
    console.log('hello `Recipes` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}

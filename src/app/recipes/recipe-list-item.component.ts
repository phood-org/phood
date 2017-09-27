import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as recipeModels from '../reducers/recipes/recipes.models';

@Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'todos'.
     */
    selector: 'recipe-list-item',  // <todos></todos>
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [],
    /**
     * Our list of styles in our component. We may add more to compose many styles together.
     */
    styles: [],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    template: `
        <div class="card-block">
        <h4 class="card-title text-center">{{recipe.Name}}</h4>
        <p class="card-text">
            <p>Cook Time: {{recipe.CookTime}} {{recipe.CookUnit}}</p>
            <p>Serves: {{recipe.ServeMin}}-{{recipe.ServeMax}}</p>
            <p>Yield: {{recipe.Yield}}</p>
        </div>
    `
})
export class RecipeListItemComponent implements OnInit {
    /**
     * Set our default values
     */
    @Input() public store: Store<any>;
    @Input() public recipe: recipeModels.Recipe;
    /**
     * TypeScript public modifiers
     */
    // constructor(
    // ) {}

    public ngOnInit() {
        console.log('hello `recipe-list-item` component');
    }
}

import {
    Component,
    OnInit
  } from '@angular/core';
  import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

  import { AppState } from '../app.service';
  import { PhoodChef } from '../phoodchef.service';

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
    public localState = { recipeNums: this.appState['recipes'] == undefined ? [] : this.appState["recipes"].map(r => r.ID) };
    /**
     * TypeScript public modifiers
     */
    constructor(
      public appState: AppState,
      public phoodChef: PhoodChef
    ) {}

    public ngOnInit() {
      console.log('hello `Recipes` component');
      /**
       * this.title.getData().subscribe(data => this.data = data);
       */
    }

    public getRecipes() {
      this.phoodChef.getRecipes();
    }

    public consoleLocalState() {
      console.dir(this.localState);
    }

    public submitState(value: string) {
      console.log('submitState', value);
      this.appState.set('value', value);
      this.localState.value = '';
    }
  }

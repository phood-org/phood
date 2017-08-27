import {
    Component,
    OnInit
  } from '@angular/core';
  import { Observable } from 'rxjs';
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
    public model: any;
    public recipes: Array<any> = this.appState.get("recipes") 
    // search = (text$: Observable<string>) => {
    //   text$
    //     .debounceTime(200)
    //     .distinctUntilChanged()
    //     .map(term => term.length < 2 
    //       ? [] 
    //       : this.recipes
    //         .map(r => r.Name)
    //         .filter(v => 
    //           v.toLowerCase()
    //           .indexOf(term.toLowerCase()) > - 1)
    //           .slice(0, 10));
    // }

    public localState = { };
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
      console.dir(this.recipes);
    }

    public submitState(value: string) {
      console.log('submitState', value);
      this.appState.set('value', value);
      this.localState.value = '';
    }
  }

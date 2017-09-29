import { Store } from '@ngrx/store';

/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <div class="container-fluid d-flex flex-column h-100">
      <nav class="col-md-auto">
        <button [routerLink]=" ['./home'] " class="btn btn-outline-primary"
          routerLinkActive="disabled" [routerLinkActiveOptions]= "{exact: true}">
          Home
        </button>
        <button [routerLink]=" ['./recipes'] " class="btn btn-outline-primary"
          routerLinkActive="disabled" [routerLinkActiveOptions]= "{exact: true}">
          Recipes
        </button>
      </nav>

      <main class="h-75">
        <div class="h-100">
          <router-outlet class="h-100"></router-outlet>
        </div>
      </main>
      <div class="scroll col">
        <pre>{{this.recipes | async | json}}</pre>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'phood';
  public url = 'https://twitter.com/AngularClass';

  public recipes: Store<any>;

  constructor(
    public appState: AppState,
    public store: Store<any>
  ) {
    this.recipes = this.store;
    console.dir(this.recipes);
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../app.models';
import * as userModels from './user.models';
// import * as userActions from './user.actions';


export function userReducer(state: userModels.User, action: ActionWithPayload<userModels.UserPayload>){
    switch(action.type) { 
        default:
            return state;
    }
}
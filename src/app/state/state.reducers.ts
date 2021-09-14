import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

import { State } from './state.interface';
import { toDoReducer } from './todo/todo.reducer';

export const appReducers: ActionReducerMap<State, any> = {
  todo: toDoReducer
};

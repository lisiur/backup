import { AnyAction } from 'redux';

export interface ACTION extends AnyAction {
  payload: {
    [prop: string]: any;
  };
}

export interface TODO_ITEM {
  id: string;
  content: string;
  completed: boolean;
}

export interface TODOS {
  allIds: string[];
  byIds: {
    [id: string]: TODO_ITEM;
  };
}

export interface LocalStore {
  todos: TODOS;
}

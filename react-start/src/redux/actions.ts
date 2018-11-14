// Actions Creator

import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';
import { AnyAction } from 'redux';

let nextTodoId = 0;

export const addTodo = (content: string): AnyAction => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = (id: string): AnyAction => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter: string): AnyAction => ({
  type: SET_FILTER,
  payload: { filter }
});

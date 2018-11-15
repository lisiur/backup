import { STATE, TODO_ITEM } from './typings/state';
import { VISIBILITY_FILTER } from '../constants';

export const getTodosState = (state: STATE) => state.todos;

export const getTodoList = (state: STATE) => getTodosState(state).allIds;

export const getTodoById = (state: STATE, id: string): TODO_ITEM =>
  getTodosState(state).byIds[id];

export const getTodos = (state: STATE): TODO_ITEM[] =>
  getTodoList(state).map(id => getTodoById(state, id));

export const getTodosByVisibilityFilter = (
  state: STATE,
  visibilityFilter: VISIBILITY_FILTER
): TODO_ITEM[] => {
  const allTodos = getTodos(state);
  switch (visibilityFilter) {
    case VISIBILITY_FILTER.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTER.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTER.ALL:
      return allTodos;
  }
};

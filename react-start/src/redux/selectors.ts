import { VISIBILITY_FILTERS } from '../constants';
import { LocalStore, TODO_ITEM } from './def';

export const getTodosState = (store: LocalStore) => store.todos;

export const getTodoList = (store: LocalStore) => getTodosState(store).allIds;

export const getTodoById = (store: LocalStore, id: string): TODO_ITEM =>
  getTodosState(store).byIds[id];

export const getTodos = (store: LocalStore): TODO_ITEM[] =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (
  store: LocalStore,
  visibilityFilter: string
) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
      return allTodos;
  }
};

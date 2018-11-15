import { AnyAction } from 'redux';
import { VISIBILITY_FILTER } from '../../constants';

export interface STATE {
  todos: TODOS;
  /** 当前筛选条件 */
  visibilityFilter: VISIBILITY_FILTER;
}

export interface TODOS {
  /** 所有 todo 的 id */
  allIds: string[];
  /** todo id 索引的 tudo */
  byIds: {
    [id: string]: TODO_ITEM;
  };
}

export interface TODO_ITEM {
  id: string;
  content: string;
  /** 是否完成 */
  completed: boolean;
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { VISIBILITY_FILTER } from '../constants';
import { TODO_ITEM, STATE } from '../redux/typings/state';
import { getTodosByVisibilityFilter } from '../redux/selectors';

type Props = {
  todos: TODO_ITEM[];
};

class TodoList extends Component<Props> {
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo, _) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
          : 'No todos, yay!'}
      </ul>
    );
  }
}

const mapStateToProps = (state: STATE): Props => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);

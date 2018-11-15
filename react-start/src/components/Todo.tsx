import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';
import { TODO_ITEM } from '../redux/typings/state';

type Props = {
  todo: TODO_ITEM;
  toggleTodo: typeof toggleTodo;
};

class Todo extends Component<Props> {
  render() {
    const { todo, toggleTodo } = this.props;
    return (
      <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? '👌' : '👋'}{' '}
        <span
          className={cx(
            'todo-item__text',
            todo && todo.completed && 'todo-item__text--completed'
          )}
        >
          {todo.content}
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todo);

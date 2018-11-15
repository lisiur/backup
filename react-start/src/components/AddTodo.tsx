import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

type Props = {
  addTodo: typeof addTodo;
};

type State = {
  input: string;
};

class AddTodo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: '' };
  }
  updateInput = (input: string) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput((e.target as any).value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

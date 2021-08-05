import React, { Component } from "react";
import UserItem from "./TodoItem";
import PropTypes from "prop-types";

class Users extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <UserItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

export default Users;

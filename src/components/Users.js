import React, { Component } from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

class Users extends Component {
  render() {
    return this.props.names.map((todo) => (
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

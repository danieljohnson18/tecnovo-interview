import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Users from "./components/Users";
import  AddUser  from "./components/AddUser";
//import {v5 as uuid} from 'uuid';
import axios from "axios";
import "./App.css";
import About from "./components/pages/About";

class App extends Component {
  state = {
    names: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => this.setState({ names: res.data }));
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.names.map((name) => {
        if (name.id === id) {
          name.completed = !name.completed;
        }
        return name;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) =>
        this.setState({
          names: [...this.state.names.filter((name) => name.id !== id)],
        })
      );
  };

  //Add Todo
  addTodo = (name) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        completed: false,
      })
      .then((res) =>
        this.setState({
          names: [...this.state.names, res.data],
        })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddUser addTodo={this.addTodo} />
                  <Users
                    names={this.state.names}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

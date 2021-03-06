import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UserItem extends Component {
    getStyle = () => {
      return{
          backgorund: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 
          'line-through' : 'none'
      }
    }


    render() {
        const{ id, name} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type ="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {name}
                    <button onClick={this.props.delTodo.bind(this, id)} style ={btnStyle}>x</button>
                    </p>
            </div>
        )
    }
}

const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default UserItem;

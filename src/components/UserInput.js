import React, { Component } from 'react';


class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangeHometown = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Username</label>
          <input onChange={this.handleChangeUsername} type='text' />
          <label>Hometown</label>
          <input onChange={this.handleChangeHometown} type='text' />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default UserInput;

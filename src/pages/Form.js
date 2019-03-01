import React, { Component } from 'react';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
    console.log('handleUsernameChange', e.target);
  }
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
    console.log('handlePasswordChange', e.target);
  }
  handleSubmit = e => {
    const formData = new FormData(e.target);
    console.log('handleSubmit', formData);
  }

  render() {
    return (
      <div>
        <form action='' method='post' target='hidden_frame' onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} onChange={this.handleUsernameChange} />
          <input type='password' name='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <input type='hidden' value='' />
          <input type='submit' value='提交' />
        </form>
        <input type='button' value='提交2' onClick={this.handleSubmit} />
        <iframe name='hidden_frame' id="hidden_frame" style={{ display: 'none' }}></iframe>
      </div>
    );
  }
}
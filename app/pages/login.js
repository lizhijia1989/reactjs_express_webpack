import React from 'react';

export default class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogin: false,
    };
    console.log('Login', props);
  }

  handleInputTextChanged = (e, state) => {
    this.setState({
      [state]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
    const formData = new FormData(e.target);
    console.log('formData', formData.get('username'), formData.get('password'));
    if (this.state.username && this.state.password) {
      this.setState({
        isLogin: true
      });
    } else {
      alert('用户名密码错误');
    }
  }

  renderLoginForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input type='text' name='username' value={this.state.username} onChange={e => { this.handleInputTextChanged(e, 'username') }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type='password' name='password' value={this.state.password} onChange={e => { this.handleInputTextChanged(e, 'password') }} />
        </div>
        <div>
          <input type='submit' value='登录' className='button-submit' />
        </div>
      </form>
    );
  }

  renderLoginedDiv = () => {
    return (
      <div>欢迎，{this.state.username}</div>
    );
  }

  render() {
    return (
      <div className='container'>
        <h1 style={{ marginBottom: '10px' }}>Login</h1>
        {this.state.isLogin ? this.renderLoginedDiv() : this.renderLoginForm()}
      </div>
    );
  }
}
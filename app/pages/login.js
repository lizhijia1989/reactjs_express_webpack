import React from 'react';

const API_LOGIN_URL = 'http://localhost:3001/api/login';

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

  fetchLogin = async (method, req) => {
    const request = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(req),
    };
    console.log('request', request);
    return await new Promise((resolve, reject) => {
      fetch(API_LOGIN_URL, request).then(res => res.json()).then(res => {
        console.log('TEST GET', res);
        resolve(res);
      }).catch(e => {
        console.log('TEST GET ERROR', e);
        reject(e);
      });
    })
  }

  handleInputTextChanged = (e, state) => {
    this.setState({
      [state]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log('handleSubmit');
    const formData = new FormData(e.target);
    console.log('formData', formData.get('username'), formData.get('password'));
    if (!this.state.username || !this.state.password) {
      alert('请输入用户名密码');
      return;
    }
    const res = await this.fetchLogin('POST', {
      username: this.state.username,
      password: this.state.password
    });
    console.log('res', res);
    if (res.status === 200) {
      if (res.code === 1) {
        this.setState({
          isLogin: true
        });
      } else if (res.code === 0) {
        alert('用户名密码错误');
      }
    } else {
      alert('网络不给力，请重试');
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
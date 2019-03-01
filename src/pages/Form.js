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
    console.log('handleSubmit', formData.get('username'), formData.getAll('gender'), formData.get('city'), formData.getAll('hobby'));
  }
  render() {
    return (
      <div>
        <form action='/api/test' method='post' target='hidden_frame' onSubmit={this.handleSubmit}>
          用户名
          <input type='text' name='username' value={this.state.username} onChange={this.handleUsernameChange} />
          <br />
          密码
          <input type='password' name='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <br />
          性别
          <label><input type='radio' name='gender' value='男' defaultChecked /> 男</label>
          <label><input type='radio' name='gender' value='女' /> 女</label>
          <br />
          城市
          <select name='city'>
            <option value='北京'>北京</option>
            <option value='上海'>上海</option>
            <option value='深圳'>深圳</option>
            <option value='杭州'>杭州</option>
          </select>
          <br />
          爱好
          <label><input type='checkbox' name='hobby' value='运动' checked readOnly /> 运动</label>
          <label><input type='checkbox' name='hobby' value='游戏' /> 游戏</label>
          <label><input type='checkbox' name='hobby' value='电影' /> 电影</label>
          <br />
          <input type='submit' value='提交' />
          <input type='hidden' value='' />
        </form>
        <input type='button' value='提交2' onClick={this.handleSubmit} />
        <iframe name='hidden_frame' id="hidden_frame" style={{ display: 'none' }}></iframe>
      </div>
    );
  }
}
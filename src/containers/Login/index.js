import React,{ Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../vendor/axios';
import { Input } from '../../components/Form/Input';
import { saveToken } from '../../actions';
import loginPageClasses from './login.module.scss';
import formClasses from '../../common/styles/form.module.scss';

export class Login extends Component{

  state = {
    email: '',
    password: ''
  }

  onFormInputChange = field => e => { 
    this.setState({
      [field]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const { email,password } = this.state;
    const data = { email,password };
    axios.post('auth/login',data)
      .then(res => {
        console.log('res',res)
        this.setState({
          email: '',
          password: ''
        })
    })

  }

  render() {
    return(
      <div className={loginPageClasses.wrapper}>
        <form onSubmit={this.onSubmit} className={formClasses.form}>
          <label className={formClasses.label}>
            <span>Email</span>
            <Input
              value={this.state.email} 
              placeholder="Enter your email"
              onChange={this.onFormInputChange('email')}
              className={formClasses.input}
            />
          </label>
          <label className={formClasses.label}>
            <span>Password</span>
            <Input
              value={this.state.password} 
              placeholder="Enter your password"
              onChange={this.onFormInputChange('password')}
              type="password"
              className={formClasses.input}
            />
          </label>
          <button type="submit" className={formClasses.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

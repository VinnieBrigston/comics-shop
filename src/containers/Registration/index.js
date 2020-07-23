import React,{ Component } from 'react';
import axios from '../../vendor/axios';
import { Input } from '../../components/Form/Input'
import wrapperClasses from './registration.module.scss';
import formClasses from '../../common/styles/form.module.scss';

export class Registration extends Component{

  state = {
    name: '',
    email: '',
    password: '',
  }

  onFormInputChange = field => e => { 
    this.setState({
      [field]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const { name,email,password } = this.state;
    const data = {
      name,
      email,
      password,
    }
    axios.post('auth/registration',data)
      .then(res => {
        console.log('res',res)
        this.setState({
          name: '',
          email: '',
          password: ''
        })
      })
  }

  render() {
    return(
      <div className={wrapperClasses.wrapper}>
        <form onSubmit={this.onSubmit} className={formClasses.form}>
          <label className={formClasses.label}>
            <span>Name</span>
            <Input
              value={this.state.name} 
              placeholder="Enter your name"
              onChange={this.onFormInputChange('name')}
              className={formClasses.input}
            />
          </label>
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
              className={formClasses.input}
              type="password"
            />
          </label>
          <button type="submit" className={formClasses.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

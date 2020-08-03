import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from '../../vendor/axios';
import { Input } from '../../components/Form/Input'
import wrapperClasses from './registration.module.scss';
import formClasses from '../../common/styles/form.module.scss';

class Registration extends Component{

  state = {
    controls: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter your name'
        },
        label: 'Name',
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Enter your email'
        },
        label: 'Email',
        value: ''
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Enter your password'
        },
        label: 'Password',
        value: '',
      }
    }
  }

  onFormInputChange = ( event, controlName ) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
      }
    };
    this.setState( { controls: updatedControls } );
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

    const formElementsArray = [];
    for ( let key in this.state.controls ) {
      formElementsArray.push( {
        id: key,
        config: this.state.controls[key]
      } );
    }

    const form = formElementsArray.map( formElement => (
      <Input
        key={formElement.id}
        elementConfig={formElement.config.elementConfig}
        label={formElement.config.label}
        value={formElement.config.value} 
        placeholder="Enter your email"
        onChange={( event ) => this.onFormInputChange( event, formElement.id )}
      />
    ))

    let authRedirect = null;

    if(this.props.isAuthenticated) authRedirect = <Redirect to={'/'} />

    return(
      <div className={wrapperClasses.wrapper}>
        {authRedirect}
        <form onSubmit={this.onSubmit} className={formClasses.form}>
          {form}
          <button type="submit" className={formClasses.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      loading: state.auth.loading,
      isAuthenticated: state.auth.token !== null,
  };
};

export default connect( mapStateToProps, null )( Registration );

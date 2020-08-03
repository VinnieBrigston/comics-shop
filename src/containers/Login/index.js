import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../../components/Form/Input';
import loginPageClasses from './login.module.scss';
import formClasses from '../../common/styles/form.module.scss';
import { login } from '../../actions'


class Login extends Component{

  state = {
    controls: {
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
    const { login } = this.props;
    const { controls } = this.state;
    login(controls.email.value,controls.password.value);
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
      <div className={loginPageClasses.wrapper}>
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

export default connect( mapStateToProps, { login } )( Login );

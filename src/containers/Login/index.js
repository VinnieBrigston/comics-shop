import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginForm } from './LoginForm.jsx';
import { SocialMediaAuth } from '../../components/SocialMedia/SocialMediaBlock';
import loginPageClasses from './login.module.scss';
import formClasses from '../../common/styles/form.module.scss';
import closeIcon from '../../assets/images/icons/close.svg';
import { REGISTER_URL, HOME_URL, RESET_PASS_URL } from '../../constants/routes';
import { getAuthenticatedStatus } from '../../reducers/selectors/selectors_user';

export function UserLogin(props) {
  const { location: { state: { return_path } = HOME_URL } } = props;
  const isAuthenticated = useSelector(getAuthenticatedStatus);
  return isAuthenticated
    ? <Redirect to={return_path} />
    : (
      <div className={loginPageClasses.wrapper}>
        <h2 className={formClasses.authTitle}>login</h2>
        <SocialMediaAuth />
        <LoginForm />
        <Link to={REGISTER_URL} className={formClasses.authLink}>registration</Link>
        <Link to={RESET_PASS_URL} className={`${formClasses.authLink} ${formClasses.ressetLink}`}>forgotten password?</Link>
        <Link to={HOME_URL} className={formClasses.authBackLink}>
          <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
        </Link>
      </div>
    );
}

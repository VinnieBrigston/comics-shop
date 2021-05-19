import React from 'react';
import { Header } from './Header';
import baseStyles from '../styles/base.scss';

export const Page = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      { children }
    </>
  );
};

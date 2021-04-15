import React from 'react';
import { Header } from './Header';

export const Page = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      { children }
    </>
  );
};

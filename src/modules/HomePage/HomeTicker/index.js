import React from 'react';
import Ticker from 'react-ticker';
import classes from './ticker.module.scss';

export function HomeTicker() {
  return (
    <Ticker>
      {({ index }) => (
        <div className={classes.tickerWraper}>
          <div className={classes.ticker}>your drug this is a new comic</div>
        </div>
      )}
    </Ticker>
  );
}

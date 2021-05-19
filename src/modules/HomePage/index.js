import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { witAuthModal } from '../Authorization/components/AuthModalProvider/withAuthModal';
import { Page } from '../../common/components/Page';
import { PasswordRecovery } from '../Authorization/components/PasswordRecovery';
import { Banner } from './Banner';
import { HomeTicker } from './HomeTicker';
import classes from './homepage.module.scss';

function Main(props) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  useEffect(() => {
    const hashFromUrl = query.get('hash');
    const {
      modalContext: { showModal },
    } = props;

    if (hashFromUrl) {
      showModal(PasswordRecovery, { hash: hashFromUrl });
    }
  }, []);

  return (
    <Page>
      <section className={classes.hero}>
        <Banner />
        <HomeTicker />
      </section>
    </Page>
  );
}

Main.propTypes = {
  modalContext: PropTypes.object,
};

const Enhanced = witAuthModal(Main);
Enhanced.displayName = 'Main';

export { Enhanced as Main };
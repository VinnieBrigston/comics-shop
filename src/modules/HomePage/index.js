import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { witAuthModal } from '../Authorization/components/AuthModalProvider/withAuthModal';
import { Page } from '../../common/components/Page';
import { PasswordRecovery } from '../Authorization/components/PasswordRecovery';

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
      <h1>Homepage</h1>
    </Page>
  );
}

Main.propTypes = {
  modalContext: PropTypes.object,
};

const Enhanced = witAuthModal(Main);
Enhanced.displayName = 'Main';

export { Enhanced as Main };

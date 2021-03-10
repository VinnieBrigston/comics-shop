import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { witAuthModal } from '../modules/Authorization/components/AuthModalProvider/withAuthModal';
import { Header } from '../components/Header';
import { PasswordRecovery } from '../modules/Authorization/components/PasswordRecovery';

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
    <Header />
  );
}

Main.propTypes = {
  modalContext: PropTypes.object,
};

const Enhanced = witAuthModal(Main);
Enhanced.displayName = 'Main';

export { Enhanced as Main };

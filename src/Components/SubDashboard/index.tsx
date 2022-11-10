import React, {useState} from 'react';
import Modal from 'react-modal';
import Cards from '../Cards';
import Graphic from '../Graphic';
import Header from '../Header';
import Table from '../Table';
import NewTransactionModal from '../NewTransactionModal';

import { Container } from './styles';

Modal.setAppElement('#root');

const SubDashboard: React.FC = () => {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  const handleOpenTransactionsModal = () => setIsNewTransactionsModalOpen(true);
  const handleClosedTransactionsModal = () => setIsNewTransactionsModalOpen(false);

  return(
    <Container>

      <Header onOpenTransactionsModal={handleOpenTransactionsModal} />
      <Cards />
      <Graphic />
      <Table/>
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleClosedTransactionsModal}
      />
    </Container>
  );
}

export default SubDashboard;

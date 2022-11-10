import React from 'react';
import {BsArrowUp, BsArrowDown} from 'react-icons/bs';
import Modal from 'react-modal';
import { Container } from './styles';

interface ModalTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<ModalTransactionProps> = ({isOpen, onRequestClose}) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <Container>
          <h1>Adicionar Entradas e Saídas</h1>
          <input type="text" placeholder='Nome' />
          <input type="number" placeholder='Valor' />
          <div>
            <button type="submit">
              Entrada
              <BsArrowUp color='#000' size={14}/>
            </button>
            <button type="submit">
              Saídas
              <BsArrowDown color='#000' size={14}/>
            </button>
          </div>
          <input type="text" placeholder='Categotia' />
          <button type="submit">Adicionar</button>
        </Container>
    </Modal>

  );
}

export default NewTransactionModal;

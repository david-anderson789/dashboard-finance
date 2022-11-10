import React, { useState } from 'react';

import {BsBell} from 'react-icons/bs';
import {IoMdAddCircleOutline} from 'react-icons/io';

import { Container, Title, Settings } from './styles';

interface HeaderProps{
  onOpenTransactionsModal: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onOpenTransactionsModal,
}) => {


  return(
    <Container>
      <Title>Dashboard</Title>
      <Settings>
        <button type="button" onClick={onOpenTransactionsModal}>
          <IoMdAddCircleOutline color='#349768' size={25}/>
        </button>

        <BsBell color='#C0C0C0' size={25}/>
      </Settings>
    </Container>
  );
}

export default Header;

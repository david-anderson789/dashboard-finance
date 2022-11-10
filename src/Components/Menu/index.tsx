import React from 'react';
import
{
  BsFillGridFill,
  BsFillCreditCard2BackFill,
  BsFillCartFill,
  BsFillBagFill,
  BsFillGearFill
} from 'react-icons/bs';
import {RiArrowRightSLine} from 'react-icons/ri';
import Avatar from '../../assets/perfil.jpg';

import { Container, Title, ListMenu, Perfil } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>Menu</Title>
      <ListMenu>
        <li className='list-active'>
          <BsFillGridFill color='#C0C0C0' size={20}/>
          <p>Dashboard</p>
        </li>
        <li>
          <BsFillCreditCard2BackFill color='#C0C0C0' size={20}/>
          <p>Finance</p>
        </li>
        <li>
          <BsFillCartFill color='#C0C0C0' size={20}/>
          <p>Ordens</p>
        </li>
        <li>
          <BsFillBagFill color='#C0C0C0' size={20}/>
          <p>Products</p>
        </li>
        <li>
          <BsFillGearFill color='#C0C0C0' size={20}/>
          <p>Settings</p>
        </li>
      </ListMenu>
      <Perfil>
        <img src={Avatar} alt="avatar" />
        <p>Maria</p>
        <RiArrowRightSLine color='#000' size={20}/>
      </Perfil>
    </Container>
  );
}

export default Menu;

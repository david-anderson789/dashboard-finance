import React from 'react';
import {BsArrowUp, BsArrowDown, BsCalendarDate, BsCurrencyDollar} from 'react-icons/bs';
import { Container, Card } from './styles';

const Cards: React.FC = () => {
  return(
    <Container>
      <Card className='Entradas'>
        <div>
          <h3>R$ 1.000,00</h3>
          <BsArrowUp color='#fff' size={20}/>
        </div>

        <p>Total Entradas</p>
      </Card>

      <Card className='Saidas'>
      <div>
          <h3>-R$ 500,00</h3>
          <BsArrowDown color='#fff' size={20}/>
        </div>
        <p>Total Saídas</p>
      </Card>

      <Card className='Total'>
      <div>
          <h3>R$ 500,00</h3>
          <BsCurrencyDollar color='#fff' size={25}/>
        </div>
        <p>Total Geral</p>
      </Card>

      <Card className='Mensal'>
      <div>
          <h3>R$ 500,00</h3>
          <BsCalendarDate color='#fff' size={20}/>
        </div>
        <p>Total Mensal</p>
      </Card>
    </Container>
  );
}

export default Cards;

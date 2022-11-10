import React from 'react';
import { Title } from '../Graphic/styles';

import { Container } from './styles';

const Table: React.FC = () => {
  return(
  <Container>
    <Title>Table</Title>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frelancer</td>
          <td>R$ 400,00</td>
          <td>Trabalho</td>
          <td>23/01/2022</td>
        </tr>
        <tr>
          <td>Despesas da Casa</td>
          <td>-R$ 400,00</td>
          <td>Limpeza</td>
          <td>23/01/2022</td>
        </tr>
        <tr>
          <td>Salário</td>
          <td>R$ 400,00</td>
          <td>Trabalho</td>
          <td>23/01/2022</td>
        </tr>
      </tbody>
    </table>
  </Container>
  ) ;
}

export default Table;

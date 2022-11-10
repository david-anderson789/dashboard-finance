import React from 'react';
import Menu from '../Components/Menu';
import SubDashboard from '../Components/SubDashboard';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <SubDashboard />
    </Container>
  );
}

export default Dashboard;

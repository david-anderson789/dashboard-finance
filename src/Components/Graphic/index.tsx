import React from 'react';
import Chart from 'react-apexcharts';



import { Container, Title } from './styles';

const options = {

  chart: {

    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true,
  },
  colors: ['#349768'],
  xaxis: {
    type: "datetime",
    categories: [
      '2022-01-22T00:00:00.000Z',
      '2022-01-23T10:00:00.000Z',
      '2022-01-24T02:00:00.000Z',
      '2022-01-25T03:00:00.000Z',
      '2022-01-26T04:00:00.000Z',
      '2022-01-27T05:00:00.000Z',
    ],

  },

}
const series = [{
  name: 'series1', data: [31, 110, 20, 150, 45, 200]
}]

const Graphic: React.FC = () => {
  return(
    <Container>
      <Title>Analytics</Title>
      <Chart type='area' height={350} options={options} series={series} />

    </Container>
  );
}

export default Graphic;

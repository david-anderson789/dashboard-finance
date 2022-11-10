import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  color: var(--secondary);


  .Entradas{
      background: var(--dark-green);
      box-shadow: rgba(16, 57, 59, 0.5) 0px 50px 80px -15px, rgba(0, 0, 0, 0.3) 0px 30px 40px -30px;
  }
  .Saidas{
    background: var(--orange);
    box-shadow: rgba(234, 127, 75, 0.5) 0px 50px 80px -15px, rgba(0, 0, 0, 0.3) 0px 30px 40px -30px;
  }
  .Total{
    background: var(--yellow);
    box-shadow: rgba(239, 196, 39, 0.5) 0px 50px 80px -15px, rgba(0, 0, 0, 0.3) 0px 30px 40px -30px;
  }
  .Mensal{
    background: var(--primary);
    box-shadow: rgba(52, 151, 104, 0.5) 0px 50px 80px -15px, rgba(0, 0, 0, 0.3) 0px 30px 40px -30px;
  }

`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 15px;
  border-radius: 12px;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
      font-size: 18px;
      font-weight: 500;
    }

  }


`;

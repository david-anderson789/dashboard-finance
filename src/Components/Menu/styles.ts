import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;

`;

export const Title = styled.h1`
  color: var(--primary);
  text-align: center;

  margin-bottom: 45px;
`;
export const ListMenu = styled.ul`
  list-style: none;

  .list-active{
      background: var(--primary);
      color: var(--secondary);

      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      svg{
        fill: var(--secondary);
      }
    }

  li {
    display: flex;
    align-items: center;

    cursor: pointer;

    padding: 10px 0 10px 16px;
    margin-bottom: 10px;

    border-radius: 0 10px 10px 0;
    p{
      font-size: 14px;
      margin-left: 12px;
    }
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--black);

  position: absolute;
  bottom: 0;
  margin-bottom: 44px;
  margin-left: 16px;

  border: 1px solid var(--font-color);
  padding: 4px;
  cursor: pointer;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;

    margin-right: 5px;
  }
`;

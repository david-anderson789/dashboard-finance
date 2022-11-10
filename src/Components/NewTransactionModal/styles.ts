import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h1{
    text-align: center;
    margin-bottom: 18px;
    color: var(--dark-green);
    font-size: 24px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      margin-bottom: 12px;
      background: #EDEDED;
      color: var(--dark-green);
      font-weight: 500;
      &:nth-child(1){
        margin-right: 5px;
      }
    }
  }

  input{
    font-size: 12px;
    padding: 16px;
    margin-bottom: 12px;
    border: 0;

    background: #EDEDED ;


    &::placeholder{
      color: var(--font-color) ;
    }
  }
  button{
    cursor: pointer;
    padding: 14px;
    border-radius: 4px;
    border: 0;
    color: var(--secondary);
    background: var(--primary);
  }
`;

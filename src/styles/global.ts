import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: var(--white);
    color: var(--font-color);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  :root {
    --primary: #349768;
    --secondary: #fff;
    --dark-green: #10393B;
    --orange: #EA7F4B;
    --yellow: #EFC427;
    --black: #000000;
    --font-color: #C0C0C0;
  }
  .react-modal-overlay {
    background: rgb(0,0,0,0.5);

    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 500px;
    background: var(--secondary);
    padding: 40px;
    position: relative;
    border-radius: 12px;
  }
`;

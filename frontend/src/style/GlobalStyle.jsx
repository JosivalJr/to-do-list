import { createGlobalStyle } from "styled-components";
import bg from "../img/bg.jpeg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  body {
    height: 100vh;
    padding: 1rem;
    color: #333;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
  }

  .icon-btn {
    all: unset;
    &:hover {
      cursor: pointer;
    }
  }

  .btn {
    background-color: #75c2f9;
    color: #fff;
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 3px;
    margin-left: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  .modal-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0,0.7);
    z-index: 1000;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 8px;
    color: black;

    .modal-close {
      display: flex;
      justify-content: end;
      padding-bottom: 0.7rem;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track, ::-webkit-scrollbar-button {
    background-color: transparent;
  }
`;

export default GlobalStyle;

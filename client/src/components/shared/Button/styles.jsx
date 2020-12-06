import styled from 'styled-components';

export default {
  Button: styled.button` 
    display: flex;
    justify-content: center;
    margin: auto;
    width: 30%;
    background-color: rgba(255,255,255,0.5);
    border: 1px solid #560829;
    color: #560829;
    font-size: 1rem;
    font-weight: bold !important;
    text-align: center;
    vertical-align: middle;
    padding: .5rem .5rem;
    border-radius: 25px;
    transition: all 1s ease-in-out;

    &:hover {
      background-color: #560829;
      border: 1px solid #560829;
      color: white;
      text-decoration: none;
    }
  `
};
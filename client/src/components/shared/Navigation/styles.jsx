import styled from 'styled-components';

export default {
  Nav: styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    height: 100%;
    width: 12rem; /*200px*/
    list-style: none;
    text-align: center;
    
    a {
      color: #560829 !important;
      text-decoration: none;
      padding: 1em !important;
        
        &:hover {
          color: #063b42 !important;
        }
    }
  }
  `
};
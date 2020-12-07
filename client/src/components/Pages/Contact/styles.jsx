import styled from 'styled-components';

export default {
  ContactDiv: styled.div`
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
    
  `,

  ContactOverlay: styled.div`
    background-color: rgba(255,255,255,0.8);
    color: #063b42;
    margin-left: 13vw;
    margin-top: 10%;
    height: 60%;
    padding: 5rem;
    text-align: center;
    width: 150%

    a {
        color: #560829 !important;
        text-decoration: none;
        padding: 1em;
        
        &:hover {
          color: #063b42;
        }
      }
  `
};
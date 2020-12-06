import React from 'react';
import { Container } from 'react-bootstrap';

import Styles from './styles';

const Layout = ({children}, name) => {

  return (
    <>
      <Styles.LayoutDiv>
        <Styles.OverlayDiv>
          {children}
         </Styles.OverlayDiv>
      </Styles.LayoutDiv>
    </>
  );
};
 
export default Layout;
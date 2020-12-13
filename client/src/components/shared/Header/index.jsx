import React, { useEffect } from 'react';
import Styles from './styles';

const Header = ({title, children}) => {
  useEffect(() => {
    document.title = title || 'The Galleria';
  });

  return (
    <Styles.Header>
      <h1>{title || 'The Galleria'}</h1>
      { children ? (
        <>
          <hr/>
          { children }
        </>
      ) : null }
    </Styles.Header>
  );
}
 
export default Header;
import React, { useEffect } from 'react';

const Header = ({title, children}) => {
  useEffect(() => {
    document.title = title || 'The Galleria';
  });

  return (
        <header style={{textAlign:"center", paddingTop: "2rem"}}>
          <h1>{title || 'The Galleria'}</h1>
          { children ? (
            <>
              <hr/>
              { children }
            </>
          ) : null }
        </header>
  );
}
 
export default Header;
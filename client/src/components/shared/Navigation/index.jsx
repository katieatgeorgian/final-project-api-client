import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';

import Logo from '../Logo';
import Styles from './styles';

const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      onClick={e => {
        e.preventDefault();
        props.navigate(props.href);    
      }}
    >
      {props.children}
    </Nav.Link>
  );
};

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Styles.Nav className="mr-auto">
        <Navbar.Brand><Logo /></Navbar.Brand>
          <Link to="/" component={NavLink}>Home</Link>
          <Link to="/gallery" component={NavLink}>Gallery</Link>
          
          {user && user.token ? (
            <>
              <Link to="/gallery/new" component={NavLink}>Add to Gallery</Link>
              <Link to="/users" component={NavLink}>Users</Link>
              <Link to="/profile" component={NavLink}>Profile</Link>
              <Link to="/profile/edit" component={NavLink}>Edit Profile</Link>
              <Link to="/logout" component={NavLink}>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" component={NavLink}>Login</Link>
              <Link to="/register" component={NavLink}>Register</Link>
            </>
          )}

          
          <Link to="/about" component={NavLink}>About</Link>
          <Link to="/contact" component={NavLink}>Contact Us</Link>
        </Styles.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Navigation;
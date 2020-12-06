import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

import Layout from '../../shared/Layout';
import Styles from './styles';

const Login = () => {
  return (
    <Layout>
      <Styles.LoginDiv>
        <Header title="Your title for the Header component block">
          <p>
            This paragraph will be the value for <strong>&#123;children&#125;</strong> in the <strong>Header component</strong>.
          </p>
          
          <p>
            The header is editable under <strong>/src/components/Authentication/Login/index.jsx</strong>
          </p>
        </Header>
        
        <Container>
          <p>
            The content is editable under <strong>/src/components/Authentication/Login/index.jsx</strong>
          </p>
          
          <LoginForm/>
        </Container>
      </Styles.LoginDiv>
    </Layout>
  );
}
 
export default Login;
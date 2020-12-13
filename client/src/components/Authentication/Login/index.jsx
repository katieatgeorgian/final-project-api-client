import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from './LoginForm';

import Layout from '../../shared/Layout';
import Styles from './styles';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

const Login = () => {
  return (
    <>
      <Layout>
        <Styles.LoginDiv>
          <Styles.LoginOverlay>
            <Header title="Login">
            </Header>
            <LoginForm/>
          </Styles.LoginOverlay>
        </Styles.LoginDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default Login;
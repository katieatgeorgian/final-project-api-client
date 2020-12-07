import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import LoginForm from './LoginForm';

import Layout from '../../shared/Layout';
import Styles from './styles';

const Login = () => {
  return (
    <>
      <Layout>
        <Styles.LoginDiv>
          <Header title="Login to view the Galleria">
          </Header>
          <LoginForm/>
        </Styles.LoginDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default Login;
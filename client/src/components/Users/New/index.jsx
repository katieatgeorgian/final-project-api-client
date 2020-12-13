import React from 'react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import UserForm from '../UserForm';

import Layout from '../../shared/Layout';
import Styles from './styles';

const New = () => {
  return (
    <>
      <Layout>
        <Styles.RegisterDiv>
          <Styles.RegisterOverlay>
            <Header title="Register">
            </Header>
            <UserForm endpoint="users"/>
          </Styles.RegisterOverlay>
        </Styles.RegisterDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default New;


        
      
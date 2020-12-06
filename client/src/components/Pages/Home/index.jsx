import React from 'react';

import Footer from '../../shared/Footer';
import Styles from './styles';
import Button from '../../shared/Button';
import Layout from '../../shared/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <Styles.HomeDiv>
          <Button href="/gallery" label="View Gallery" className="btn"></Button>
        </Styles.HomeDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default Home;
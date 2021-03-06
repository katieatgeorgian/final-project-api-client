import React from 'react';

import Layout from '../../shared/Layout';
import Header from '../../shared/Header'
import Footer from '../../shared/Footer';
import Styles from './styles';

const About = () => {
  return (
    <>
      <Layout>
        <Styles.AboutDiv>
          <Styles.AboutOverlay>
            <Header title="About Us" />
            <h3>Art lovers rejoice!</h3>
            <p>the Galleria is a collective gallery, which allows artists to showcase their work to potential art buyers.</p>
            <p>Photography, painting, wordworking, pottery, crafting - if you want it to be seen, let it be seen at the Galleria</p>
        </Styles.AboutOverlay>
      </Styles.AboutDiv>
    </Layout>
    <Footer />
    </>
  );
}
 
export default About;
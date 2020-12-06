import React from 'react';

import Layout from '../../shared/Layout';
import Footer from '../../shared/Footer';
import Styles from './styles';

const About = () => {
  return (
    <>
    <Layout>
      <Styles.AboutDiv>
        <Styles.AboutOverlay>
          <h2>Art lovers rejoice!</h2>
          <p>the Galleria is a collective gallery, which allows artists to showcase their work to potential art buyers.</p>
          <p>Photography, painting, wordworking, pottery, crafting - if you want it to be seen, let it be seen at the Galleria</p>
          <p></p>
        </Styles.AboutOverlay>
      </Styles.AboutDiv>

    </Layout>
    <Footer />
    </>
  );
}
 
export default About;
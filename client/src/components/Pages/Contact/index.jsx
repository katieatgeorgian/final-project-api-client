import React from 'react';

import Layout from '../../shared/Layout';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Styles from './styles';

const Contact = () => {
  return (
    <>
    <Layout>
      <Styles.ContactDiv>
        <Styles.ContactOverlay>
          <Header title="Contact Us" />
          <h5>Phone</h5>
          <p><a href="tel:705-555-5555">(705) 555-5555</a></p>
          <h5 className="pt-3">Email</h5>
          <a href="mailto:info@thegalleria.ca">info@thegalleria.ca</a>
          <address className="pt-3">
            1 Georgian Drive <br/>
            Barrie, Ontario L4M 3X9

          </address>
        </Styles.ContactOverlay>
      </Styles.ContactDiv>
    </Layout>
    <Footer />
    </>
  );
}
 
export default Contact;
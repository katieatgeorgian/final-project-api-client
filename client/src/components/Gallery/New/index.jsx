import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../../shared/Layout';
import Styles from './styles';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

import GalleryForm from "../GalleryForm";

const New = () => {
  return (
    <>
      <Layout>
        <Styles.NewDiv>
          <Styles.NewOverlay>
            <Header title="Create a New Listing">
            </Header>
            <GalleryForm endpoint="gallery"/>
          </Styles.NewOverlay>
        </Styles.NewDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default New;
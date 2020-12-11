import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import GalleryForm from "../GalleryForm";
 
const New = () => {
  return (
    <>
      <Header title="Create a New Listing" />
 
      <Container>
        <GalleryForm endpoint="gallery/update"/>
      </Container>
    </>
  );
}
 
export default New;
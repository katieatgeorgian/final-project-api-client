import React, {useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

import Layout from '../../shared/Layout';
import Styles from './styles';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import GalleryForm from "../GalleryForm";
 
const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload] = useState();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/gallery/${id}`)
    .then(({ data }) => {
      setPreload(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the listing: ${error.message}`
      });
    });
  }, []);

  return (
    <>
      <Layout>
        <Styles.NewDiv>
          <Styles.NewOverlay>
            <Header title="Update a New Listing">
            </Header>
            <GalleryForm endpoint="gallery/update" preload={preload}/>
          </Styles.NewOverlay>
        </Styles.NewDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default Edit;
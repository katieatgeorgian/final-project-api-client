import React, {useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

import Header from '../../shared/Header';
import GalleryForm from "../GalleryForm";
 
const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload ] = useState({});
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
        message: `There was an error retrieving the quote: ${error.message}`
      });
    });
  }, [globalStore, id, setNotification]);

  return (
    <>
      <Header title="Edit your Listing" />
 
      <Container>

        <GalleryForm endpoint="gallery/update" preload={preload}/>
      </Container>
    </>
  );
}
 
export default Edit;
import React, { useContext, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';
import Axios from 'axios';
import { NotificationContext } from '../../shared/Notifications';
import { GlobalStoreContext } from '../../shared/Globals';

import './styles.css';

const GalleryModal = ({close, show, artist, title, category, email, imageUrl, id}) => {
  const { user } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [redirect, setRedirect] = useState(false);
  
  // const handleView = async event => {
  //   event.preventDefault();
  //   console.log("view")
  // };

  const handleDelete = event => {
    event.preventDefault();
    console.log(id);
    const picId = event.target.id;

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/gallery/destroy`, {
      _id: picId,  
      secret_token: (user && user.token) 
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Your listing was deleted"
        });
      }

      setRedirect(true);
  
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error deleting your art: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="gallery"/>
  return (
    <Modal show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={show === true ? "d-block" : "d-none"}
    >
      <Modal.Header closeButton onHide={close}>
        <Modal.Title className="font-italic">Title: {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-9 pr-1">
            <img src={imageUrl} style={{width:"75%"}} alt={title}/> 
          </div>

          <div className="col-2 pl-3 d-flex flex-column">
          <Link to={`/gallery/${id}`}><button className="btn mb-2 view">View</button></Link>

          {user && user.token ? (
            <>
              <Link to={`/gallery/edit/${id}`}><button className="btn edit mb-2">Edit</button></Link>
              <button className="btn delete mb-2" onClick={handleDelete} id={id}>Delete</button>
            </>
          ) : null}
        </div>

          {/* <div className="col-3 pl-3">
            <h6>Artist:</h6><h5>{artist}</h5>
            <h6>Category: {category}</h6>
            <h6><a href={`mailto:${email}`}>Contact Artist</a></h6>
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
 
export default GalleryModal;
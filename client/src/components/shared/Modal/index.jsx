import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './styles.css';

const GalleryModal = ({close, show, artist, title, category, email, imageUrl}) => {

  const handleView = async event => {
    event.preventDefault();
    console.log("view")
  };

  const handleEdit = async event => {
    event.preventDefault();
    console.log("edit")
  };

  const handleDelete = async event => {
    event.preventDefault();
    console.log("delete")
  };

  return (
    <Modal show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={show === true ? "d-block" : "d-none"}
    >
      <Modal.Header closeButton onHide={close}>
        <Modal.Title>Title: {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-9 pr-1">
            <img src={imageUrl} style={{width:"75%"}} alt={title}/> 
          </div>

          <div className="col-2 pl-3 d-flex flex-column">
            <button className="btn mb-2 view" onClick={handleView}>View</button>
            <Link to="/profile/edit"><button className="btn edit mb-2" onClick={handleEdit}>Edit</button></Link>
            <button className="btn delete mb-2" onClick={handleDelete}>Delete</button>
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
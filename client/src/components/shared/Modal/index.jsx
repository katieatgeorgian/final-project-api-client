import { Modal, Button } from "react-bootstrap";

const GalleryModal = ({close, show, artist, title, category, email, image}) => {

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
          <div className="col-8 pr-1">
            <img src={image} style={{width:"100%"}} /> 
          </div>

          <div className="col-3 pl-3">
            <h6>Artist:</h6><h5>{artist}</h5>
            <h6>Category: {category}</h6>
            <h6><a href={`mailto:${email}`}>Contact Artist</a></h6>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
 
export default GalleryModal;
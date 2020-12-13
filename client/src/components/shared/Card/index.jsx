import React, {useState} from 'react';
import './styles.css';

import ModalGallery from '../Modal';

const GalleryCard = ({title, imageUrl, i, artist, category, email, id}) => {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  }

  const handleShow = (e) => {
    setOpen(true);
    console.log(id);
  }
  return (
    <>
    {open && 
      <ModalGallery id={id} show={open} artist={artist} title={title} email={email} category={category} imageUrl={imageUrl} close={handleClose}></ModalGallery>
      }
    <div data-tag={i} key={i} className="galleryCard" onClick={handleShow}>
      <img
        data-tag={i}
        alt={title}
        src={imageUrl}
      />
      <h4 className="mt-1 font-italic" style={{color: "#560829"}}>{title}</h4>
    </div>
    </>
  );
}
 
export default GalleryCard;

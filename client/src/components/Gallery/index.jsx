import React, { Fragment, useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';
import { UserContext } from '../Authentication/UserProvider';
import { Link } from 'react-router-dom';

import Styles from './styles';

import GalleryCard from '../shared/Card';

// let data = require('../../../dummyData.json');
// console.log(data);
// console.log(typeof data);

const Gallery = (cat) => {

  let catAll = '';
  if (cat.cat === null || cat.cat === 'null') {
    catAll = true
  } else {
    catAll = false;
  }
  const { globalStore } = useContext(GlobalStoreContext);
  const [artPieces, setArtPieces] = useState([]);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/gallery`)
    .then(({ data }) => setArtPieces(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
        type: "danger",
        message: "Couldn't access the art pieces at this time."
      });
    });
  }, [globalStore]);

  return (
    <>
      <Styles.GalleryDiv>

        <div className="gallerySection">

          {artPieces && artPieces.length > 0 ? (

            catAll ? 
              Object.values(artPieces)
              .map((art, i) => {
              console.log(art);
                return (
                <Fragment key={i}>
                <GalleryCard key={i} id={art._id} title={art.title} imageUrl={art.imageUrl} email={art.email} firstName={art.firstName} lastName={art.lastName} category={art.category} i={i}></GalleryCard>
                </Fragment>
                );
              })

            :

              Object.values(artPieces)
              .filter(i => i.category === cat.cat)
              .map((art, i) => {
              console.log(art);
                return (
                <Fragment key={i}>
                <GalleryCard key={i} id={art._id} title={art.title} imageUrl={art.imageUrl} email={art.email} firstName={art.firstName} lastName={art.lastName} category={art.category} i={i}></GalleryCard>
                </Fragment>
              );
            })
          )
        :
          <p>No art pieces to show</p>
        }
      </div>
      </Styles.GalleryDiv>
    </>
  );
}

export default Gallery;
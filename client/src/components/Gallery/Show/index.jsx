import React, { Fragment, useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { Link, useParams } from 'react-router-dom';

import Styles from './styles';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

const Show = (cat) => {

  const { globalStore } = useContext(GlobalStoreContext);
  const [artPiece, setArtPiece] = useState({});
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { id } = useParams();
console.log(id);
  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/gallery/${id}`)
    .then(({ data }) => setArtPiece(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
        type: "danger",
        message: "Couldn't access the art piece at this time."
      });
    });
  }, [globalStore]);
console.log(artPiece);
  return (
    <>
      <Styles.ShowDiv>
      <Styles.ShowOverlay>
        <div>
          {artPiece ? (
            <>
            <Header title={`${artPiece.title}`}/>
            <div className="row">
              <div className="col-7 pr-1">
                <img className="shadow" src={artPiece.imageUrl} style={{width:"100%"}} alt={artPiece.title}/> 
              </div>

               <div className="col-5 pl-3">
                <h6>Artist:</h6><h5>{artPiece.artist}</h5>
                <h6>Category: {artPiece.category}</h6>
                {user && user.token ? (
                  <h6><a href={`mailto:${artPiece.email}`}>Contact Artist</a></h6>
                ) : 
                  <p><small>Register or Login to see contact information</small></p>
                }
              </div>
            </div> 
            </>
          ) : null}
        </div>
        </Styles.ShowOverlay>
      </Styles.ShowDiv>
      <Footer />
    </>
  );
}

export default Show;
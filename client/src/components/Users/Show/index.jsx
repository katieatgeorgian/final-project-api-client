import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../../shared/Header';
import Layout from "../../shared/Layout";
import Footer from '../../shared/Footer';
import Styles from './styles';

const Show = () => {
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, []);

  return (
    <>
    {userDetails ? (
      <>
        <Layout className="mt-3">
        
          <Styles.UserShowDiv>
            <Styles.UserShowOverlay>

        <Header title="Profile"></Header>
          <Media>
            <img
              src="https://via.placeholder.com/150"
              width={150}
              height={150}
              className="mr-3"
            />
            <Media.Body>
              <h5>{userDetails.name}</h5>
              <p>
                <strong>Email:</strong>&nbsp;{userDetails.email}
              </p>

              <p>
                <strong>Since:</strong>&nbsp;{userDetails.createdAt}
              </p>

              <p>
                <Link to="/profile/edit">Edit profile...</Link>
              </p>
            </Media.Body>
          </Media>
          </Styles.UserShowOverlay>
          </Styles.UserShowDiv>
        </Layout>
        </>
    ) : null}
    <Footer/>
    </>
  );
}
 
export default Show;
import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { Container } from 'react-bootstrap';
import UserForm from '../UserForm';

import Header from '../../shared/Header';
import Layout from "../../shared/Layout";
import Footer from '../../shared/Footer';
import Styles from './styles';

const Edit = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:4000/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, []);

  return (
    <>
    {userDetails ? (
      <Layout className="mt-3">
        <Styles.UserEditDiv>
          <Styles.UserEditOverlay>
            <Header title="Edit Profile"></Header>
            <UserForm
              styles={{width: "100% !important"}}
              preloadData={ userDetails }
              endpoint="users/update"
              buttonLabel="Update"
            />
          </Styles.UserEditOverlay>
        </Styles.UserEditDiv>
      </Layout>
    ) : null}
    <Footer/>
    </>
  );
}
 
export default Edit;
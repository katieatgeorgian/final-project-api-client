import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';
import { Table } from 'react-bootstrap';
import Header from '../shared/Header';

import Layout from "../shared/Layout";
import Footer from '../shared/Footer';
import Styles from './styles';

const Users = () => {
  const { globalStore } = useContext(GlobalStoreContext);
  const [users, setUsers] = useState([]);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users`)
    .then(({ data }) => setUsers(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
        type: "danger",
        message: "Couldn't access the users at this time."
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
    {users ? (
        <Layout className="mt-3">
        
          <Styles.UserDiv>
            <Styles.UserOverlay>
            <Header title="Users">
        </Header>
              <Table>
                <thead>
                  <tr>
                    <td className="font-weight-bold">Name</td>
                    <td className="font-weight-bold">Email</td>
                  </tr>
                </thead>

                <tbody>
                  {users.map(({name, email}, i) => (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              </Styles.UserOverlay>
            </Styles.UserDiv>
        </Layout>
    ) : null }
    <Footer/>
    </>
  );
}
 
export default Users;
import React, { createContext, useState } from 'react';
import { Alert } from 'react-bootstrap';

import Styles from './styles';


export const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState(null);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <Styles.NotificationDiv>
        {notification ? (
          <Alert variant={notification.type}>
            {notification.message}
          </Alert>
        ) : null}
      </Styles.NotificationDiv>
        {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
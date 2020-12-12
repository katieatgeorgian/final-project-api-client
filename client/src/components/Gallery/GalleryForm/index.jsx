import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
 
const GalleryForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState();
  
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
 
  useEffect(() => {
    setInputs({...preload});
    console.log(inputs);
  }, [preload]);

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };
 
  const handleSubmit = event => {
    event.preventDefault();
 
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Your art was added to the gallery successfully"
        });
      }
 
      return <Redirect to="/gallery"/>;
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error adding your art: ${error.message}`
      });
    });
  };
 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Artist's Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" name="artist" onChange={handleChange} defaultValue={inputs.artist}/>
      </Form.Group>

      <Form.Group >
      <Form.Label>Category</Form.Label>
      <Form.Control type="text" placeholder="Category" name="category" onChange={handleChange} defaultValue={inputs.category}/>
      </Form.Group>

      <Form.Group >
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} defaultValue={inputs.title}/>
      </Form.Group>

      <Form.Group >
      <Form.Label>Image</Form.Label>
      <Form.Control type="text" placeholder="Image Url" name="imageUrl" onChange={handleChange} defaultValue={inputs.imageUrl}/>
      <small>Please enter url address where image can be located</small>
      </Form.Group>

      <Form.Group >
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Email address" name="email" onChange={handleChange} defaultValue={inputs.email} />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default GalleryForm;
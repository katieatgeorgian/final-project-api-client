import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import './styles.css';
 
const GalleryForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
 
  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
    console.log(inputs);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
    
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: `Success`
        });
      }
 
     setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error adding your art: ${error.message}`
      });
    });
  };

  const handleCancel = event => {
    event.preventDefault();
    setRedirect(true);
  }
 
  if(redirect) return <Redirect to="/gallery"/>;
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Artist's First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={handleChange} defaultValue={inputs.firstName}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Artist's Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={handleChange} defaultValue={inputs.lastName}/>
      </Form.Group>

      <Form.Group className="mt-2" >
        <Form.Label>Category</Form.Label><br/>
        {/* <Form.Control type="text" placeholder="Category" name="category" onChange={handleChange} defaultValue={inputs.category}/> */}
        <select id="category" name="category" onChange={handleChange} value={inputs.category}>
          <option value="null">Category</option>
          <option value="photography">Photography</option>
          <option value="pottery">Pottery</option> 
          <option value="painting">Painting</option>
          <option value="drawing/sketching">Drawing/Sketching</option>
          <option value="sculpture">Sculpture</option>
          <option value="other">Other</option>
        </select> 
      
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

      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </Form>  
  );
}

export default GalleryForm;
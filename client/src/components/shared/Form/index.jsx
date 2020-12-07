import { Form } from "react-bootstrap";
import './styles.css';
import Button from '../Button';


const FormField = () => {

  return (
<Form>
  <Form.Group>
    <Form.Label>Artist's Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" placeholder="Category" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Title" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email address" />
  </Form.Group>

  <Button href="#" label="Submit" className="btn pl-5 pr-5"></Button>
</Form>
  );
}
 
export default FormField;
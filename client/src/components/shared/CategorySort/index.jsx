import React, {useState} from 'react';
// import { Dropdown } from "react-bootstrap";

import './styles.css';
import Gallery from '../../Pages/Gallery';

const CategorySort = () => {
  const [category, setCategory] = useState(null);

  const handleChange = (e) =>{
    console.log('handling');    
    setCategory(e.target.value);
    console.log(category);
  }

  return (
    <>
    <div className="dropdown">
      <select id="category" onChange={handleChange}>
        <option value="null">Category</option>
        <option value="photography">Photography</option>
        <option value="pottery">Pottery</option> 
        <option value="painting">Painting</option>
      </select> 
    </div>
    <Gallery cat={category}/>
    </>
  );
}
 
export default CategorySort;


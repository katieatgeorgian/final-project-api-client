import React, {useState} from 'react';
import './styles.css';
import Gallery from '../../Gallery';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer';

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
          <option value="drawing/sketching">Drawing/Sketching</option>
          <option value="sculpture">Sculpture</option>
          <option value="other">Other</option>
        </select> 
      </div>
      <Gallery cat={category}/>
      <p style={{textAlign: "right", marginTop: "3rem", marginRight: "13rem"}}>
        <Link to="/gallery/new">Create a Listing!</Link>
      </p>
      <Footer />
    </>
  );
}
 
export default CategorySort;


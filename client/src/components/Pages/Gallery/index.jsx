import React, {Fragment} from 'react';

import Footer from '../../shared/Footer';
import Styles from './styles';

import GalleryCard from '../../shared/Card';
import Form from "../../shared/Form";

let data = require('../../../dummyData.json');
console.log(data);
console.log(typeof data);

const Gallery = (cat) => {

  let catAll = '';

  if (cat.cat == null || cat.cat == 'null') {
    catAll = true
  } else {
    catAll = false;
  }

console.log(cat);
  return (
    <>
      <Styles.GalleryDiv>
        
        <div className="gallerySection">
          {catAll ? 
          Object.values(data)
          .map((art, i) => {
          console.log(art);
            return (
              <Fragment key={i}>
                <GalleryCard key={i} title={art.title} img={art.img} email={art.email} artist={art.artist} category={art.category} i={i}></GalleryCard>
              </Fragment>
            );
          })

          :
          Object.values(data)
          .filter(i => i.category == cat.cat)
          .map((art, i) => {
          console.log(art);
            return (
              <Fragment key={i}>
                <GalleryCard key={i} title={art.title} img={art.img} email={art.email} artist={art.artist} category={art.category} i={i}></GalleryCard>
              </Fragment>
            );
          })
        }
        </div>
      </Styles.GalleryDiv>
      <Footer />
    </>
  );
}

export default Gallery;
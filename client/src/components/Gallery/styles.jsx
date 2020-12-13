import styled from 'styled-components';

export default {
  GalleryDiv: styled.div`
    margin-left: 13rem;
    margin-top: 3rem;
    
    .gallerySection{
      display:flex;
      flex-wrap: wrap;
    }


    /* Cards */
.galleryCard {

  height: 35vh;
  width: 40% !important;
      margin: 1rem;
  text-align: center;
  background-color: transparent;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}


.galleryCard img {
  margin-top: 1rem;
  /* width: 75%; */
  height: auto;
}

  `,
};
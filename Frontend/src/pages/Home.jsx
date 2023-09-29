import React from 'react'
import ImageSliderAuto from '../components/ImageSliderAuto.jsx';
import {CardsContainer } from '../components/CardsContainer.jsx';
export function Home({data}) {

  
  return (
    <>
   <ImageSliderAuto />
   <CardsContainer data={data} />
   
    </>
  );
}

// export default Home;




import React from 'react'
import { Card } from './Card.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import {Swiper, SwiperSlide} from 'swiper/react';
// import {FreeMode} from 'swiper';
// import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'bootstrap/dist/css/bootstrap.min.css'



export  const CardsContainer = ({data}) => {
  // console.log(data);
//   const medicalUses = [
//     { symptom: {symptom} },
//     { description: {description} },
// ]; 

// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

};

  return (
    <div className="slider-container p-40">
      {/* <h2>React Slick Slider Example</h2> */}
      <Slider {...settings} >
          {data.slice(0,10).map(({_id, picture, medicalUses, hindiName, englishName, buttonText, link}) => 
   <Card key={_id} picture={picture} englishName={englishName} hindiName={hindiName} medicalUses={medicalUses} buttonText={buttonText}  link={link}/>)}
     </Slider>

    {/*<div className='carousel py-4 px-6 justify-content-spacearound'>
 <Slider {...settings} ><div className='box m-5'>   {data.slice(0,4).map(({_id, picture, medicalUses, hindiName, englishName, buttonText, link}) => 
   <Card id={_id} picture={picture} englishName={englishName} hindiName={hindiName} medicalUses={medicalUses} buttonText={buttonText}  link={link}/>)}  </div> </Slider> 
      

      
       <div className="col">
      <Swiper  freeMode={true}
        grabCursor={true}   
        // modules={[FreeMode]}    
        className='mySwiper'
        slidesPerView={5}
        spaceBetween={20} >


<SwiperSlide>
     <Card picture="data:image/webp;base64,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"
    imgAlt=" Emblic Myrobalan"
    hindiName="Brahmi"
    symptom="Hair fall"  
    description=" Brahmi oil massaged on
    the scalp promotes hair growth
    and also good for the brain, the
    nervous system, and also the
    mind."
    buttonText="Learn More"
    link="card5" />
   </SwiperSlide>
         
          <SwiperSlide>
  
   
    <Card picture="https://t0.gstatic.com/images?q=tbn:ANd9GcTRSSSoEV6oNxdfxHHqt2Czyl2rLkvjuCA4su9vv0zHEyPRcpLH"
    imgAlt=" Emblic Myrobalan"
    hindiName="Guava"
    symptom="Toothache"  
    description="The leaves guava
    can be chewed and this paste can
    be kept in contact with the teeth
    for some time. The antiplaque
    properties of guava leaves are
    effective in  ..."
    buttonText="Learn More"
    link="card1" />
    </SwiperSlide>

    <SwiperSlide>
    <Card picture="https://t2.gstatic.com/images?q=tbn:ANd9GcSYVAQBGdbM7Kv4AlS9884AgHw-caanoiHjYNBUCJuqehNgdAkL"
    imgAlt=" Emblic Myrobalan"
    hindiName="Amalaki"
    symptom="Diabetes"  
    description="Intake of
    25ml Amalaki juice added with 3
    gms of turmeric powder twice
    a day before food is useful in
    prameha, (urinary disorders
    including Diabetes)."
    buttonText="Learn More"
    link="card2" />
    </SwiperSlide>

    <SwiperSlide>
    <Card picture="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQM8nwV7NPzjiDacVjce0p39E0pSkLtlK7qBFbsxlRksQfy7WwY"
    imgAlt=" Emblic Myrobalan"
    hindiName="Aparajita"
    symptom="Wound Healing"  
    description=" 5-10 ml of
    leaf juice is mixed with turmeric
    powder to made fine paste . This
    paste applied over the bleeding
    wound to arrest the bleeding
    immediately"
    buttonText="Learn More"
    link="card3" />
    </SwiperSlide>

    <SwiperSlide>
      <Card picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHx1g2ee34ALNOZD58uGCyVJuNH5kTZvmpcKg1wpD-1fqKzrOu"
      // picture="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_FmO7nTPcm84XO5EriiEOaB5JDUQy0oT0HglayiazpCD1l6nh"
    imgAlt=" Emblic Myrobalan"
    hindiName="Dadima"
    symptom="Intestinal worms"  
    description=" Eat 150 gms of
    pomegranate seeds on an empty
    stomach every morning."
    buttonText="Learn More"
    link="card4" />
    </SwiperSlide>

    <SwiperSlide>
     <Card picture="data:image/webp;base64,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"
    imgAlt=" Emblic Myrobalan"
    hindiName="Brahmi"
    symptom="Hair fall"  
    description=" Brahmi oil massaged on
    the scalp promotes hair growth
    and also good for the brain, the
    nervous system, and also the
    mind."
    buttonText="Learn More"
    link="card5" />
   </SwiperSlide>
   
   </Swiper>
   </div> */}
   </div>
  )
}



// data[0]
// data[Math.floor(Math.random() * data.length-1)
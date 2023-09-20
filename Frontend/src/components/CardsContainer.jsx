import React from 'react'
import { Card } from './Card.jsx';

export  const CardsContainer = () => {
  return (
    
    <div className="card">
    <div className="col">
    <Card imgSrc="https://t0.gstatic.com/images?q=tbn:ANd9GcTRSSSoEV6oNxdfxHHqt2Czyl2rLkvjuCA4su9vv0zHEyPRcpLH"
    imgAlt=" Emblic Myrobalan"
    title="Guava"
    Ailment="Toothache"  
    description="The leaves guava
    can be chewed and this paste can
    be kept in contact with the teeth
    for some time. The antiplaque
    properties of guava leaves are
    effective in preventing and
    treating oral problems."
    buttonText="Learn More"
    link="card1" />
    <Card imgSrc="https://t2.gstatic.com/images?q=tbn:ANd9GcSYVAQBGdbM7Kv4AlS9884AgHw-caanoiHjYNBUCJuqehNgdAkL"
    imgAlt=" Emblic Myrobalan"
    title="Amalaki"
    Ailment="Diabetes"  
    description="Intake of
    25ml Amalaki juice added with 3
    gms of turmeric powder twice
    a day before food is useful in
    prameha, (urinary disorders
    including Diabetes)."
    buttonText="Learn More"
    link="card2" />
    <Card imgSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQM8nwV7NPzjiDacVjce0p39E0pSkLtlK7qBFbsxlRksQfy7WwY"
    imgAlt=" Emblic Myrobalan"
    title="Aparajita"
    Ailment="Wound Healing"  
    description=" 5-10 ml of
    leaf juice is mixed with turmeric
    powder to made fine paste . This
    paste applied over the bleeding
    wound to arrest the bleeding
    immediately"
    buttonText="Learn More"
    link="card3" />
   </div>
   </div>
  )
}



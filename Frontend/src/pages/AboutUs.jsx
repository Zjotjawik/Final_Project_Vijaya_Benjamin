import React from 'react'

export const AboutUs = () => {
  return (
    <>
    <div className='flex justify-content-between w-100  align-content-center text-serif text-xl '> 
      <div className='w-50 ' >
     <h1 className='p-2 mt-40 font-bold text-center'> About AyurEase</h1>  
    <p> Welcome to Ayurease, your trusted source for ancient Ayurvedic wisdom and natural remedies. At Ayurease, we are dedicated to helping you find holistic solutions for common ailments through the power of Ayurveda. </p>
    <h2 className='font-bold'>Our mission</h2>
      <p>Our mission is to provide accessible and reliable information about Ayurvedic remedies and traditional healing practices. We aim to empower individuals to take control of their well-being by offering natural and time-tested solutions for a variety of health concerns.</p>
     <h2 className='font-bold'>Who We Are</h2>
     <p>Ayurease is a team of passionate individuals deeply rooted in the traditions of Ayurveda. Our experts have spent years studying and practicing Ayurvedic medicine, and we are committed to sharing this ancient knowledge with the world.</p>
      
      <ul>
        <h2 className='font-bold'>What Sets Us Apart:</h2>
        <li><span className='font-bold'>Authentic Ayurveda: </span> We are committed to upholding the authenticity and integrity of Ayurvedic practices. Our remedies are derived from ancient texts and are backed by centuries of wisdom.
        <li><span className='font-bold'>Comprehensive Ailment Directory:</span>Our website provides a user-friendly platform where you can easily search for specific health concerns and discover the Ayurvedic ingredients and remedies associated with them.</li>
    </li>
     <li> <span className='font-bold'>Community and Support:</span>Join our community of like-minded individuals who are on a journey to better health. Connect with others, ask questions, and share your experiences.</li>
      </ul>

      </div>
      
      <div className='w-50'>
        <img className= 'mt-60 h-60 w-120 'src="https://www.keralatourism.org/images/ayurveda/category/large/kizhi_large1.jpg" alt="kizhi" />
      </div>
      </div>

      <div className='container flex justify-content-space-justify-content-around'>
        <div className='parallel w-50'>
        <h2 className='p-2 font-bold text-center'>Our Vision</h2>
        <p>We envision a world where individuals have access to natural and sustainable solutions for their health and well-being. We believe that Ayurveda, with its emphasis on balance and harmony, has the potential to transform lives and promote a healthier future.</p>
       <h2 className='font-bold'>Get Started</h2>
        <p>Exploring Ayurveda and its remedies is just a click away. Use our search feature to find the Ayurvedic ingredients and remedies that may help alleviate your health concerns. We're here to guide you on your path to wellness.</p>
        </div>
        <div className='parallel w-50'> 
        {/* <img className='' src="" alt="" /> */}
        </div>
      </div>
    
    </>
  
  )
}

// export default AboutUs

import React from 'react'

export const AboutUs = () => {
  return (
    <>

    <div className='flex justify-content-center w-100  align-content-center text-serif text-xl text-center  bg-orange-300'> 
        <div className='w-50 ' >
           <h1 className='pb-10 mt-40 font-bold text-center text-5xl text-gray-500'> About Us</h1>  
            <p className='about-intro  text-2xl'> Welcome to Ayurease, your trusted source for ancient Ayurvedic wisdom and natural remedies. At Ayurease, we are dedicated to helping you find holistic solutions for common ailments through the power of Ayurveda. </p>
        </div>
         <div className='w-50'>
           <img src="https://img.freepik.com/free-photo/person-conducting-reiki-therapy_23-2149403921.jpg?w=1380&t=st=1696228941~exp=1696229541~hmac=baf3e3e38ddd7f5f017e6660a0045da7b36abc2bbce0f5749af53c2caac5d1d9" alt="relaxation"  />
         </div>
      
    </div>

    <div className='our-mission m-25 ml-8 mr-8 '>
      <h2 className='font-bold mt-5 text-3xl text-center p-5 text-gray-500'>Our mission</h2>
      <p className='text-serif text-2xl ' >Our mission is to provide accessible and reliable information about Ayurvedic remedies and traditional healing practices. We aim to empower individuals to take control of their well-being by offering natural and time-tested solutions for a variety of health concerns.</p>
      
      <ul>
        <h2 className='font-bold mt-4 mb-2 text-3xl text-gray-500 text-center'>What Sets Us Apart</h2>
        <li className=' text-2xl'><span className='font-bold '>Authentic Ayurveda: </span> We are committed to upholding the authenticity and integrity of Ayurvedic practices. Our remedies are derived from ancient texts and are backed by centuries of wisdom.
        <li className='mt-4'><span className='font-bold'>Comprehensive Ailment Directory:</span>Our website provides a user-friendly platform where you can easily search for specific health concerns and discover the Ayurvedic ingredients and remedies associated with them.</li>
        </li>
        <li className='mt-4 text-2xl mb-20'> <span className='font-bold'>Community and Support:</span>Join our community of like-minded individuals who are on a journey to better health. Connect with others, ask questions, and share your experiences.</li>
      </ul>
      </div>
      <div className='yoga flex justify-content-between  py-8 items-center w-full bg-gray-300'>
        <div className='yoga-pic h-90 w-190'>
          <img className='yoga-image ' src="https://img.freepik.com/free-photo/one-hiking-lifestyle-summer-yoga_1150-1002.jpg?size=626&ext=jpg&ga=GA1.2.1613054525.1694512097&semt=sph" alt="yoga-posture" />
        </div>
        <div className='content-right mt-5 '>
         <h2 className='p-2 font-bold text-center  text-3xl text-gray-500 '>Our Vision</h2>
         <p className='para-vision text-2xl pl-5'>We envision a world where individuals have access to natural and sustainable solutions for their health and well-being. We believe that Ayurveda, with its emphasis on balance and harmony, has the potential to transform lives and promote a healthier future.</p>
         <h2 className='font-bold mt-4 mb-2 text-3xl text-center text-gray-500 '>Get Started</h2>
        <p className='para-vision text-2xl pl-5'>Exploring Ayurveda and its remedies is just a click away. Use our search feature to find the Ayurvedic ingredients and remedies that may help alleviate your health concerns. We're here to guide you on your path to wellness.</p>
        </div>
   
    </div>

      {/* <div className='container flex justify-content-space-justify-content-around'>
        <div className='parallel w-50'>
        <h2 className='p-2 font-bold text-center'>Our Vision</h2>
        <p>We envision a world where individuals have access to natural and sustainable solutions for their health and well-being. We believe that Ayurveda, with its emphasis on balance and harmony, has the potential to transform lives and promote a healthier future.</p>
       <h2 className='font-bold'>Get Started</h2>
        <p>Exploring Ayurveda and its remedies is just a click away. Use our search feature to find the Ayurvedic ingredients and remedies that may help alleviate your health concerns. We're here to guide you on your path to wellness.</p>
        </div>
        <div className='parallel w-50'> 
        {/* <img className='' src="" alt="" /> */}
        {/* </div>
      </div>
     } */}
    </>
  
  )
}

// export default AboutUs

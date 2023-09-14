import React from 'react'
// import backgroundImage from '../assets/bg.jpg';
// import logo from '../assets/logo1.png';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { famagnifyingglass } from '@fortawesome/free-solid-svg-icons';
//  import { famagnifyingglass} from 'react-icons/fa';
import ImageSlider from '../components/ImageSlider.jsx';
import { SliderData } from '../components/SliderData.jsx';

function Home() {
  return (
    <>
    <header className= "home">
     
      <nav className= "container">
        <ul>
       <li> <img src="https://trello.com/1/cards/650167512301ed18efe43ba2/attachments/6501703c371d848126f60299/download/logo1.png" /></li>
       {/* <li><h2>Ayurhelper</h2></li> */}
       <li> <a href="#home"> Home</a></li>
       <li> <a href="#">About us</a></li>
       <li>  <a href="#">Ailments</a></li>
       <li> <a href="#">Ayur Ingredients</a></li>
       <li> <a href="#">Suggestion form</a></li>
       <li> <a href="#">Signed in</a></li>
        {/* <li> <FontAwesomeIcon icon={light("magnifying-glass")} /></li>  */}
        </ul>
      </nav>
    </header>
    <div className="containerSlide">
    <ImageSlider className="slider" slides={SliderData} />;
    </div>
    </>
  )
}

export default Home;




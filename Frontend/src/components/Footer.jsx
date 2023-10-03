import React from 'react'
// import { faIcons } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';



export const Footer = () => {
    return (
        <>
        
     <div className="footer-bottom">
            <div className="Footer">
                <div className="footer-container">
                    <div className="row ">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            
                            <h3><img className='footer-logo' src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="" /><span>Ayur</span>Ease</h3>
                            <p>Your Guide to Natural Healing </p>
                            <div className="footer-icons">
                     
                               <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook" ></i></a>
                             <a href="https://twitter.com/">   <i className="fa-brands fa-twitter"  > </i></a>
                             <a href="https://www.instagram.com/">   <i className="fa-brands fa-instagram" ></i></a>
                             <a href="https://www.linkedin.com/">   <i className="fa-brands fa-linkedin-in" ></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/suggestion-form">Suggestion form</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/ingredients">AyurIngredients</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-3">
                            <h5>Information</h5>
                            <ul>
                            <li className="nav-item">
                                    <a className="" href="/about">AboutUs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/auth/signin">MyAccount</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">FAQ</a>
                                </li>
                                </ul>
                        </div>
                        <div className="social-links col-md-6 col-lg-4 col-12 ft-4">
                            <h5>AyurEase Online</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +92 3121320483</p>
                            <p><i className="fa-solid fa-envelope"></i> ayurease@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i>10115 Berlin, Germany.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copy right 2023</p>
            </div>
     </div>
        </>
    )
}

// export default Footer
       
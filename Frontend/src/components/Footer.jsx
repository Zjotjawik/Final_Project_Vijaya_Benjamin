import React from 'react'
// import { faIcons } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';



export const Footer = () => {
    return (
        <>
        
     <div className="footer-bottom">
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            
                            <h3><img className='footer-logo' src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="" /><span>Ayur</span>Ease</h3>
                            <p>Your Guide to Natural Healing </p>
                            <div className="footer-icons">
                     
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
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
                                    <a className="" href="/">Suggestion form</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Ailments</a>
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
                                    <a className="" href="/">AboutUs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">MyAccount</a>
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
       {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png?20220821121039" alt="Facebook Icon" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HPo_08r3lhM_9yz3cufBPh9cwU5UMXay8Bisn0KZOQ&s" alt="Twitter Icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram Icon" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBUObZUshTvf11tWlk6Ouv276BeFP1BFH6TD3idxKVA&s" alt="Linkedin Icon" /> */}
                              {/* <i>< bsBsFacebook size="50px" color="blue" /></i>  
                             <p><img alt="phone-symbol"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAADW1tb7+/vs7Oze3t7k5OSDg4Pz8/NjY2PBwcH4+Pjh4eF+fn5paWnT09PJycmysrIsLCw+Pj6bm5umpqZzc3MXFxczMzMfHx9HR0e6urpTU1NcXFyPj48lJSUNDQ0NdL2yAAAEv0lEQVRoga1Z26KCIBDMwtTKNDXL7OL/f+UxliUui0CdeSrFcRn2Bq5Wsegur76r8ujnQnBKAPfz9v/Ji0SiOf+3/V2iok//lXxz19iT+zr4UTZmfelRMx0z7QVFmPj7Esczz8h81yv0WQB3rYwf/cN3Dzn6UsdwJ8k5wJptJoeXHkP0hUq6APbVXtI3S8qj3Y9nH8O+Ykekd0sjuKfqPf4arsyMavAoiXbD3PIW/p3C2DfoZM8A7nl4HPtqXPBJ1OTwMeYWx769utjXht1v7CNtx7mayuSW3Zz96mBPKzp8C3JVH7bd/J00+3vx2pJyu4LwSBB8smNgQ7FX6NWZnWyFx6sTgwxHJU60fadcw0I041GZD4AXXD8X2IKHou5bc7iAmTzFXD8uA6Y46pWw/a5cqrVcbizfFq7KKfHMc6S5Z/aGEC3t2o82e+0WRNOAfx+EAQqYMVHkl9lw0KWBrIc572YumQFekG/EnJB+0txmM6ge01i+qYP73kTdOaD6Gjt4dg9/rh5yrmJD33sK2zVlICYh3H2ytIohFkT1uqirCh5T8N/F8oJCqnaWaxGwhf0Ijw2+Ls7yCgNfG+fLK9vfIRFySu4Nj0XuxT5DKKPKDk+9parlLyf3ctvwtIQ58CvvfMeIENS5neErcLMY7jI2WjWkCO6CuKUhTUxlR6lU6XDkY5jd0gollDZSl9qOMoXba/eKyj+FfJTfMhP6KdhuabpyYZSh1VO6HCO4Rfug5BAm1ajMW5LckVJsNKYuNxlZPHfd9eFneiUc4L7eKhd6+TbYQ+nln1n+tYTajNKT9HRGxWFJieXCxoyjSpKL2qTXK3jjK9D01pz7O0ghJaWWo64wZ9A9h4XaGnrOsAeA6qH3F/uJX7Q6HxpsdO5HwVGNegPJdPp9C/6gPA8u3uknIgCqGx3EfqDW4guAwxglh6hhX0E0mEZFEkcUgd7uRkdFkpgQXahiMJBGio3Xr6dCIPBkdBG52MEe6IeC0VPOji33z7YDi7l9S5MF3bfPWbemDAhjsdc1d4K4xyJ8RnbphT+OYezVbN6Q3fR33JBR0U0ARluVE9l1R2VNosLrrmL1rBYJdb8pkrFLosNr++iQd4tnKrKTZy+40K/TZ6jtmcOtcxFNSQ8rkl+Ul6FsXttho3OxVx9Ppy7v7MYGbSJ47uGzXYRka/f7ZxS33Wl2q+w+20V+bO07qep6xtKkgewilqiepdS4tW1aqO3CZaj6tlZ823CpUNs7t+0f5a3tZajtwnOJXbmkJzIN2u5Lz8hObsTyc9+R51xou+8MW7A3vnEkOz1jmz2049LZvQeG+HEi9GQRULmCxACelcU1RfCUvyjiCe0tql0MFfPg9OkF+A5wJFgbL02EG2CiHUK9BgpCoJDyCLSkTzbI4aEbtVUqc1XA550xOjhkd3IPzKeuIzES9YT0x8V0ICS0Gh8PPh/LSje94B6CFkdF9fLSi9Ou4ZsdmqwSc2dILZjoL5pouznyz5e4pD2b5ovKe/16Z8mUb8Qz/+GzcPji63d2A9KjQp+8iudYV+vqJBumH3fEW7290PH7B3XWNTT1K64mulD1BHf/i946dmWrURc/71V1sLrLHnNtGG7ZSCryB847LebzBXgKAAAAAElFTkSuQmCC"></img> +92 3121324083</p>
                            <p><img alt="mailbox"src="data:image/png;base64,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"></img> ayurease@gmail.com</p>
                            <p><img src="data:image/png;base64,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" alt="paper-plane"></img> Berlin, Germany.</p> */}
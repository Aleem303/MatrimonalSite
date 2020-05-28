import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return(
    <footer class="site-footer "> 
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h6>About US</h6>
            <p class="text-justify">Make Marriage Simple</p>
          </div>

          <div class="col-xs-6 col-md-6">
            <h6>Quick Links</h6>
            <ul class="footer-links">             
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/post"><li>Posts</li></NavLink>
              <NavLink to="/matrimony"><li>Matrimony</li></NavLink>
              <NavLink to="/contact-us"><li>Contact Us</li></NavLink>
              <NavLink to="/about-us"><li>About Us</li></NavLink>  
            </ul>
          </div>
        </div>
     </div>
         
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
            <a href="#"> ISDP</a>.
            </p>
          </div>         
        </div>
      </div>    
  </footer>
  
  )

}

export default Footer;
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import image from './Group_1.svg';

const ContactUs = () => {

    return (

        <div className="jumbotron mt-5">
          <Link to = "/home" className = "button-18 button_back">Home</Link>  
          <div className = "text">
         
            <h2 className ="margin" >Contact Us</h2>
            <img className ="mt-5" src={image} className = "center_pic" />
            <p className ="mt-4">123 Any Street</p>
            <p>Any Town, USA</p>
            <h4>Hours</h4>
            <p>Weekdays: 6:00am - 6:00pm</p>
            <p>Saturday: 7:00am - 7:00pm</p>
            <p>Closed on Sundays</p>
            
          </div>
          <p className = "footer">© 2021, EE4221 or its Affiliates. All rights reserved.</p>
        </div>

        
      );
};
export default ContactUs;
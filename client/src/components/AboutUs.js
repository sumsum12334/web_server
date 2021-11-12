
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import image from './business_woman_icon.jpg';

const AboutUs = () => {

 
    return (
        <div className="jumbotron mt-5">
          <Link to = "/home" className = "button-18 button_back">Home</Link>
          <div className = "text">
            <h2>About Us</h2>
            <img className = "mt-5" src={image} height = {370} width = {250}/>
            <p className = "mt-5">Our site got started when Shirley Rodriguez found that she was frequently looking up data from a variety of databases.
                Shirley decided to start sharing some of this data with other social researchers.</p>
            <p className = "footer">© 2021, EE4221 or its Affiliates. All rights reserved.</p>
          </div>
        </div>
      );
};
export default AboutUs;
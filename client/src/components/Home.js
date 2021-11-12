import React from "react";
import { Link } from "react-router-dom";
import image from './Group_1.svg';
import './Home.css';

const Home = () => {

 
  return (
    <div className="jumbotron mt-5">
{/* height = {250} width = {250} */}
      <img src={image} className = "center_pic" />

      <div className = "text margin">
        <Link to = "/query" className = "button-18 button_query">Query</Link>
      </div>
      <div className = "text margin">
        <Link to ="/aboutus" className = "button-18 button_us">About Us</Link>
        <Link to ="/contactus" className = "button-18 ml-5 button_us">Contact Us</Link>
      </div>
      <p className = "footer">© 2021, EE4221 or its Affiliates. All rights reserved.</p>

    </div>
    
  );
};
export default Home;
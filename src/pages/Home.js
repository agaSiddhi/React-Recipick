import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
//import * as animationData from "./launch.json";
import groovyWalkAnimation from "../assets/food.json";
//import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import { useStateValue } from '../StateProvider';
import{ auth } from "../firebase_log";

function Home() {
  const navigate = useNavigate();
  const user = useStateValue();
  console.log(user);
  const decide = event => {
    event.preventDefault(); // prevent refresh
    navigate('/Login');
    
    // if (user) {
    //   <Link to="/menu"></Link>
    // } else {
    //   <Link to="/login"></Link>
    //   const toggleUser = () => {
    //     setUser(!user);
    // }
  }

  const Anime = () => {
    const options = {
      animationData: groovyWalkAnimation,
      loop: true
    };
  
    const { View } = useLottie(options);
  
    return <>{View}</>;
  };
  return (
    <div className="home" style={{ backgroundColor: `#68A7AD`}}>
      <div className="headerContainer">
        <div className="cover">
        <h1> RECIPICK </h1>
        <p> pick your recipe</p>
        <button onClick={decide}> {user?'Start Picking' : 'Sign Up / Login'} </button>
        </div>
        <div className="anime"><Anime /></div>
      </div>
    </div>
  );
}

export default Home;

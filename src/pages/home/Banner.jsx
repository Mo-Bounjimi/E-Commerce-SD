import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/Header-PC.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content z-30'>
        <h4>Up to 20% Discount on</h4>
        <h1>Epic Gaming PCs - Designed for Gamers</h1>
        <p>Elevate your gaming experience with our exclusive selection of high-performance gaming PCs, now at unbeatable prices! Whether you're a casual player or a hardcore gamer, we have the perfect setup for you.</p>
        <button className='btn'> <Link to ='/shop'>EXPLORE NOW</Link> </button>
      </div>
      <div className='header__image'>
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  )
}

export default Banner
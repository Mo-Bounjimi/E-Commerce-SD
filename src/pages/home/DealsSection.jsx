import React from 'react'
import dealsImg from "../../assets/Deals-Img.png"

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals__content'>
            <h5>Get Up To 20% Discount</h5>
            <h4>Deals Of This Month</h4>
            <p>Get up to 20% off on top gaming gear, including desktops, laptops, consoles, and accessories.
            It's the perfect time to upgrade your setup, save big and enjoy the best gaming experience with high-performance products made for every gamer.</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>22</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>34</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>9</h4>
                    <p>Secs</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default DealsSection

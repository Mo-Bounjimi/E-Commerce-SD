import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className="ri-truck-line"></i></span>
            <h4>Free Shipping</h4>
            <p>Get your gear delivered fast and free with our reliable shipping service.</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-money-dollar-circle-line"></i></span>
            <h4>Secure Payments</h4>
            <p>Shop with confidence using trusted and encrypted payment methods.</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-user-voice-line"></i></span>
            <h4>24/7 Support</h4>
            <p>Need help? Don't worry, our experts are here for you anytime, day or night.</p>
        </div>
    </section>
  )
}

export default PromoBanner

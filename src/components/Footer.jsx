import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container blog__container'>
        <div className='footer__col'>
            <h4>CONTACT</h4>
            <p>
                <span><i className="ri-map-pin-fill"></i></span>
                Sidi Moumen, Casablanca, Morocco
            </p>
            <p>
                <span><i className="ri-mail-fill"></i></span>
                bounjimimohamed7@gmail.com
            </p>
            <p>
                <span><i className="ri-phone-fill"></i></span>
                (+212) 618694963
            </p>
        </div>
        <div className='footer__col'>
            <h4>Company</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Terms & Conditions</a>
        </div>
        <div className='footer__col'>
            <h4>Explore</h4>
            <a href="/">Help</a>
            <a href="/">Track My Order</a>
            <a href="/">Shop</a>
        </div>
        <div className='footer__col'>
            <h4>Payment Methods</h4>
            <p>
                <span><i className="ri-visa-fill"></i></span>
                Visa
            </p>
            <p>
                <span><i className="ri-mastercard-line"></i></span>
                MasterCard
            </p>
            <p>
                <span><i className="ri-paypal-line"></i></span>
                PayPal
            </p>
        </div>
    </footer>

    <div className='footer__bar'>
        Copyright © 2025 by SonDon. All rights reserved.
    </div>
    
    </>
  )
}

export default Footer

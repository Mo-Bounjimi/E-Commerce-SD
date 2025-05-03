import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../components/RatingStars';

import asusRogHyperionImg from '../../assets/asus-rog-hyperion-gr701-Img.webp';
import msiClaw8Img from '../../assets/msi-claw-8-Img.webp';
import hpOmnibookImg from '../../assets/hp-omnibook-ultra-flip-14-Img.webp';
import razerWolverineImg from '../../assets/razer-wolverine-v3-pro-Img.webp';
import lenovoThinkpadImg from '../../assets/lenovo-thinkpad-p16-Img.webp';
import steelseriesArctisNovaImg from '../../assets/steelseries-arctis-nova-5-wireless-Img.webp';
import valveSteamDeckImg from '../../assets/valve-steam-deck-Img.webp';
import enermaxStarryknightImg from '../../assets/enermax-starryknight-sk30-v2-Img.webp';
import msiMagForgeImg from '../../assets/msi-mag-forge-112r-Img.webp';
import asusRogZephyrusImg from '../../assets/asus-rog-zephyrus-g16-Img.webp';

const ProductCards = ({ products }) => {
  const imageMap = {
    'asus-rog-hyperion-gr701-Img.webp': asusRogHyperionImg,
    'msi-claw-8-Img.webp': msiClaw8Img,
    'hp-omnibook-ultra-flip-14-Img.webp': hpOmnibookImg,
    'razer-wolverine-v3-pro-Img.webp': razerWolverineImg,
    'lenovo-thinkpad-p16-Img.webp': lenovoThinkpadImg,
    'steelseries-arctis-nova-5-wireless-Img.webp': steelseriesArctisNovaImg,
    'valve-steam-deck-Img.webp': valveSteamDeckImg,
    'enermax-starryknight-sk30-v2-Img.webp': enermaxStarryknightImg,
    'msi-mag-forge-112r-Img.webp': msiMagForgeImg,
    'asus-rog-zephyrus-g16-Img.webp': asusRogZephyrusImg,
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {products.map((product, index) => (
        <div key={index} className='product__card'>
          <div className='relative'>
            <Link to={`/shop/${product._id}`}>
              <img
                src={imageMap[product.image]}
                alt={product.name}
                className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300'
              />
            </Link>

            <div className='hover:block absolute top-3 right-3'>
              <button>
                <i className="ri-shopping-cart-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>

          {/* Product description */}
          <div className='product__card__content'>
            <h4>{product.name}</h4>
            <p>
              ${product.price}{' '}
              {product?.oldPrice ? <s>${product.oldPrice}</s> : null}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;

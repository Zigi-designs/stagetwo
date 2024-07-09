import React from 'react';
import './Selling.css';
import {
  ps4_caset,
  Playstation3,
  Playstation4,
  Playstation4white,
  Playstation5,
  Playstation5white,
  Playstation5Fifa15,
  Group3,
  Xbox360,
  fifa2018
} from '../../assets';

const Selling = () => {
  return (
    <section>
      <h2 className='best'>Best Selling</h2>
      <div className='all_product'>
        <div className='product'>
          <img src={Playstation5white} className='product_image' alt='PlayStation 5 (White)' />
          <p>PlayStation 5 (White)</p>
          <a href='#' className='add_to_cart'>Add to Cart</a>
        </div>
        <div className='product'>
          <img src={Group3} className='product_image' alt='PlayStation 5 Pad' />
          <p>PlayStation 5 Pad</p>
          <a href='#' className='add_to_cart'>Add to Cart</a>
        </div>
        <div className='product'>
          <img src={Xbox360} className='product_image' alt='Xbox 360' />
          <p>Xbox 360</p>
          <a href='#' className='add_to_cart'>Add to Cart</a>
        </div>
      </div>

      <div className='all_product'>
        <div className='product'>
          <img src={Playstation4} className='product_image' alt='PlayStation 4' />
          <p>PlayStation 4</p>
          <a href='#' className='add_to_cart'>Add to Cart</a>
        </div>
        <div className='product'>
          <img src={Playstation4white} className='product_image' alt='PlayStation 4 (White)' />
          <p>PlayStation 4 (White)</p>
          <a href='#' className='add_to_cart'>Add to Cart</a>
        </div>
        <div className='product'>
          <img src={Playstation5Fifa15} className='product_image' alt='PlayStation 5 (+FIFA 15)' />
          <p>PlayStation 5 (+FIFA 15)</p>
          <a href='#' className='add_to_cart'>Add to Cart</a>
        </div>
      </div>

      <section className='promo'>
        <h2>PlayStation 5</h2>
        <p>
          <del>N150,000</del>
          <span className='money'> N150,000</span>
          <span className='off'>30% Off</span>
        </p>
        <div className='two_image'>
        <a href='#' className='buy_now'>Buy Now</a>
        <img src={Group3} className='promo_image' alt='PlayStation 5 Pad' />
        <img src={Playstation5white} className='boxx' alt='PlayStation 5' />
        </div>
      </section>

      <section>
        <h2 className='best'>Products on Promo</h2>
        <div className='all_product'>
          <div className='product'>
            <img src={ps4_caset} className='product_image' alt='GTA 5/FIFA 18 + Uncharted 4' />
            <p>GTA 5/FIFA 18 + Uncharted 4</p>
            <a href='#' className='add_to_cart'>Add to Cart</a>
          </div>
          <div className='product'>
            <img src={fifa2018} className='product_image' alt='FIFA 2018' />
            <p>FIFA 2018</p>
            <a href='#' className='add_to_cart'>Add to Cart</a>
          </div>
          <div className='product'>
            <img src={Playstation3} className='product_image' alt='PlayStation 3' />
            <p>PlayStation 3</p>
            <a href='#' className='add_to_cart'>Add to Cart</a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Selling;

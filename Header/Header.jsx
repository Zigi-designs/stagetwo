import React from 'react'
import './Header.css';
import{Playstation5white,Group3,Banner} from "../../assets"

const Header = () => {
  return (
    <header>
    <div className='Wrapper'>
      <div>
      <img src={Playstation5white} className='white' alt='ps5white'></img>
      <img src={Group3} className='pad' alt='game pad'></img>
      </div>
      <div>
      <p className='switch'>Switch From PS4 to PS5</p>
      <a href='#' className='swap'>Swap Playstation</a>
      <a href='#' className='Register'>Register</a>
      </div>
    </div>
    </header>
  )
}

export default Header
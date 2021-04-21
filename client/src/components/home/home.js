import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from './home.css';

export const Home = () => {
  const [menyActive, setMenyActive] = useState(false);
  return (
    <div className='wrapperHomeContainer'>
      {/* mobile device hamburger */}
      <div
        onClick={() => setMenyActive(!menyActive)}
        className='wrapperHamburger'
      >
        {menyActive ? (
          <div className='wrapperDropdown'>
            <ul className='wrapperHamburgerRoutes'>
              <li className='hamburgerRoutes'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hamburgerRoutes'>
                <Link to='/players'>clients</Link>
              </li>
              <li className='hamburgerRoutes'>
                <Link to='/about'>about</Link>
              </li>
            </ul>
            <div className='activeHamburgerIcon'>
              <i class='fas fa-volleyball-ball'></i>{' '}
            </div>
          </div>
        ) : (
          <div className='hamburgerIcon'>
            <i class='fas fa-volleyball-ball'></i>{' '}
          </div>
        )}
      </div>
      {/* desktop device navbar  */}
      <div className='header'>
        <div className='smallLogoContainer'>
          <div className='smallLogo'></div>
        </div>
        <div className='nav'>
          <ul className='wrapperDesktopRoutes'>
            <li className='desktopRoutes'>
              <Link className='homeLink' to='/'>
                Home
              </Link>
            </li>
            <li className='desktopRoutes'>
              <Link className='homeLink' to='/players'>
                clients
              </Link>
            </li>
            <li className='desktopRoutesAbout'>
              <Link className='homeLink' to='/about'>
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* center Logo  */}
      <div className='logoContainer'>
        <div className='logo'></div>
      </div>
      <div className='wrapperFooter'>
        <div className='footer'>
          <div className='contact'>
            <a href='mailto:info@jact.eu'>
              <i class='far fa-envelope icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a href='tel: +46735177331'>
              {' '}
              <i class='fas fa-phone icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a href='https://www.instagram.com/jact.eu/?hl=sv'>
              <i class='fab fa-instagram icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a href='https://sv-se.facebook.com/jact.eu/'>
              <i class='fab fa-facebook icons'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

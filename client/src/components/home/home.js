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
                <Link to='/players'>Players</Link>
              </li>
              <li className='hamburgerRoutes'>
                <Link to='/about'>about</Link>
              </li>
            </ul>
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
              <Link to='/'>Home</Link>
            </li>
            <li className='desktopRoutes'>
              <Link to='/players'>Players</Link>
            </li>
            <li className='desktopRoutesAbout'>
              <Link to='/about'>about</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* center Logo  */}
      <div className='logoContainer'>
        <div className='logo'></div>
      </div>
    </div>
  );
};

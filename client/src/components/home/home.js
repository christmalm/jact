import React, { useState } from 'react';
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
              <li className='hamburgerRoutes'>Home</li>
              <li className='hamburgerRoutes'>Players</li>
              <li className='hamburgerRoutes'>About</li>
            </ul>
            {/* <div className='iconActive'>
              <i class='fas fa-volleyball-ball'></i>{' '}
            </div> */}
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
            <li className='desktopRoutes'>home</li>
            <li className='desktopRoutes'>players</li>
            <li className='desktopRoutes'>about</li>
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

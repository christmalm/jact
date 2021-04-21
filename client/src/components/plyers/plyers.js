import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { API_URL } from '../../constants/api';
import players from './players.css';

export const Plyers = () => {
  const [playerList, setPlayerList] = useState([]);
  const [menyActive, setMenyActive] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/playerList`)
      .then((res) => {
        if (res) {
          console.log(res.data);
          setPlayerList(res.data);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);
  return (
    <div className='containerClients'>
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
            <div className='activehamburgerIconPlayer'>
              <i class='fas fa-volleyball-ball'></i>{' '}
            </div>
          </div>
        ) : (
          <div className='hamburgerIconPlayer'>
            <i class='fas fa-volleyball-ball'></i>{' '}
          </div>
        )}
      </div>
      {/* desktop device navbar  */}
      <div className='headerPlayers'>
        <div className='navPlayer'>
          <ul className='wrapperDesktopRoutesPlayers'>
            <li className='desktopRoutesPlayers'>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li className='desktopRoutesPlayers'>
              <Link className='link' to='/players'>
                Clients
              </Link>
            </li>
            <li className='desktopRoutesPlayersAbout'>
              <Link className='link' to='/about'>
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='wrapperHeaderClients'>
        <div className='headerClients'>
          <i class='fas fa-user-edit'></i>Jact Clients
        </div>
      </div>
      {playerList.map((player) => {
        return (
          <div className='wrapperPlayer' key={player._id}>
            <div className='wrapperImg'>
              <img
                className='playerImg'
                src={`${API_URL}/uploads/${player.img}`}
                alt=''
              />
            </div>
            <div className='wrapperDesc'>
              <div className='name'>{player.name}</div>
              <div className='desc'>{player.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

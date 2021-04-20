import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/api';

import players from './players.css';

export const Plyers = () => {
  const [playerList, setPlayerList] = useState([]);
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

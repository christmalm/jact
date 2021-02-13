import React, { useEffect } from 'react';
import { API_URL } from '../../../constants/api';
import axios from 'axios';

export const PlayerList = (props) => {
  const { setplayersArr, playersArr, updatedPlayerList } = props;

  useEffect(() => {
    axios
      .get(`${API_URL}/playerList`)
      .then((res) => {
        console.log(res);
        if (res) {
          setplayersArr(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatedPlayerList]);

  return (
    <div>
      {playersArr.map((player) => {
        return (
          <div key={player._id}>
            <div>
              {player.name}
              <div>{player.desc}</div>
            </div>
            <img
              style={{ width: '100px', height: '100px' }}
              src={`${API_URL}/uploads/${player.img}`}
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
};

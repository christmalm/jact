import React, { useEffect } from 'react';
import axios from 'axios';

export const PlayerList = () => {
  const playerArr = [];

  useEffect(() => {
    axios
      .get('http://localhost:4000/app/playerList')
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
};

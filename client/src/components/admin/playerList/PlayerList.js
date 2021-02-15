import React, { useEffect } from 'react';
import { API_URL } from '../../../constants/api';
import axios from 'axios';

export const PlayerList = (props) => {
  const {
    setplayersArr,
    playersArr,
    updatedPlayerList,
    setUpdatedPlayerList,
  } = props;

  const newPlayerListAfterDelete = (data) => {
    const formerPlayerList = playersArr;
    const deletedPLayerObject = data.data;
    let mergedObjectsArray = formerPlayerList.concat(deletedPLayerObject);

    let newOb = Object.values(
      mergedObjectsArray.reduce(
        (acc, cur) => Object.assign(acc, { [cur._id]: cur }),
        {}
      )
    );
    setUpdatedPlayerList(newOb);
  };

  const deletePlayer = (playerId) => {
    const data = playerId;
    axios
      .delete(`${API_URL}/deletePlayer/${data}`)
      .then((data) => {
        newPlayerListAfterDelete(data);
      })
      .catch((err) => {
        console.log(err, 'hej ');
      });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/playerList`)
      .then((res) => {
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
            <div>
              <button onClick={() => deletePlayer(player._id)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

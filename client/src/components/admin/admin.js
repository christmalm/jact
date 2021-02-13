import React, { useState } from 'react';
import { AddPlyerPopup } from './addPlyerPopup/AddPlyerPopup';
import { PlayerList } from './playerList/PlayerList';

export const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [playersArr, setplayersArr] = useState([]);
  const [updatedPlayerList, setUpdatedPlayerList] = useState([]);

  return (
    <div>
      <div>
        {showModal ? (
          <button disabled>Add player</button>
        ) : (
          <button onClick={() => setShowModal(!showModal)}>Add player</button>
        )}
      </div>

      <div>
        {showModal ? (
          <AddPlyerPopup
            setUpdatedPlayerList={setUpdatedPlayerList}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : null}
      </div>
      <div>all players from BE</div>
      <PlayerList
        updatedPlayerList={updatedPlayerList}
        setplayersArr={setplayersArr}
        playersArr={playersArr}
      />
    </div>
  );
};

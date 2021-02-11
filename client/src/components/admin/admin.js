import React, { useState } from 'react';
import { AddPlyerPopup } from './addPlyerPopup/AddPlyerPopup';
import { PlayerList } from './playerList/PlayerList';

export const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>
        {showModal ? (
          <button disabled>Add player</button>
        ) : (
          <button onClick={() => setShowModal(!showModal)}>Add player</button>
        )}
      </div>
      <div>all players from BE</div>
      <PlayerList />
      <div>
        {showModal ? (
          <AddPlyerPopup showModal={showModal} setShowModal={setShowModal} />
        ) : null}
      </div>
    </div>
  );
};

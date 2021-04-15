import React, { useState } from 'react';
import { AddPlyerPopup } from './addPlyerPopup/AddPlyerPopup';
import { PlayerList } from './playerList/PlayerList';
import admin from './admin.css';

export const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [playersArr, setplayersArr] = useState([]);
  const [updatedPlayerList, setUpdatedPlayerList] = useState([]);

  return (
    <>
      {localStorage.getItem('loggedIn') !== null ? (
        <div className='adminWrapperContainer'>
          <div>
            {/* <div>
              {showModal ? (
                <button disabled>Add player</button>
              ) : (
                <button onClick={() => setShowModal(!showModal)}>
                  Add player
                </button>
              )}
            </div> */}

            <div>
              <AddPlyerPopup
                setUpdatedPlayerList={setUpdatedPlayerList}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
          </div>
          <div>
            <div>all players from BE</div>
            <PlayerList
              updatedPlayerList={updatedPlayerList}
              setUpdatedPlayerList={setUpdatedPlayerList}
              setplayersArr={setplayersArr}
              playersArr={playersArr}
            />
          </div>
        </div>
      ) : (
        <h1>Not authorized.</h1>
      )}
    </>
  );
};

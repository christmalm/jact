import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_URL } from '../../../constants/api';

export const AddPlyerPopup = (props) => {
  const { register, handleSubmit } = useForm();
  const { setShowModal, setUpdatedPlayerList } = props;

  const onSubmit = (playerData, e) => {
    const playerName = playerData.name;
    const playerDescription = playerData.description;
    const image = playerData.image[0];
    const singlePlayer = new FormData();
    singlePlayer.append('image', image);
    singlePlayer.append('description', playerDescription);
    singlePlayer.append('name', playerName);

    axios
      .post(`${API_URL}/playerData`, singlePlayer)
      .then((res) => {
        setUpdatedPlayerList(res.data);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Player Image file</label>
        <input type='file' name='image' ref={register} />
      </div>
      <div>
        <label>Player name</label>
        <input type='text' name='name' ref={register} />
      </div>
      <label>Description</label>
      <textarea name='description' cols='40' rows='5' ref={register}></textarea>
      <button type='submit'>Add player</button>
    </form>
  );
};

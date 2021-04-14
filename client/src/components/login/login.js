import React from 'react-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../constants/api';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (loginData) => {
    const username = loginData.username;
    const password = loginData.password;
    const adminCred = { username, password };
    // adminCred.append('username', username);
    // adminCred.append('password', password);
    // console.log(adminCred.getAll('username'), 'admincred');

    axios
      .post(`${API_URL}/signin`, adminCred)
      .then((res) => {
        localStorage.setItem('loggedIn', res.data.loggedIn);
        console.log(res);
        history.push('/Admin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input type='text' name='username' ref={register} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' ref={register} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

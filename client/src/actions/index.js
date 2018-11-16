import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const addNew = values => dispatch => {
  axios
    .post('/api/items', values)
    .then(res => console.log('good', res))
    .catch(err => console.log('bad', err));
};

// export const addNew = values => async dispatch => {
//   console.log('B');
//   const res = await axios.post('/api/items', values);

//   dispatch({
//     type: FETCH_USER,
//     payload: res.data,
//   });

//   console.log(res);
// };

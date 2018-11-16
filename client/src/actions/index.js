import axios from 'axios';
import { FETCH_USER, ADD_ITEM } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const addNew = values => async dispatch => {
  const res = await axios.post('/api/items', values);

  dispatch({
    type: ADD_ITEM,
    payload: res.data,
  });
};

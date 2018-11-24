import axios from 'axios';
import { FETCH_USER, FETCH_ITEMS, ADD_ITEM } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchItems = () => async dispatch => {
  const res = await axios.get('/api/items');

  dispatch({
    type: FETCH_ITEMS,
    payload: res.data,
  });
};

export const addNew = (values, history) => async dispatch => {
  const res = await axios.post('/api/items', values);

  history.push('/items');

  dispatch({
    type: ADD_ITEM,
    payload: res.data,
  });
};

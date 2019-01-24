import axios from 'axios';
import {
  FETCH_USER,
  FETCH_ITEMS,
  FETCH_ITEM,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from './types';

import history from '../history';

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

export const fetchItem = id => async dispatch => {
  const res = await axios.get(`/api/items/${id}`);

  dispatch({
    type: FETCH_ITEM,
    payload: res.data,
  });
};

export const addItem = values => async dispatch => {
  const res = await axios.post('/api/items', values);

  dispatch({
    type: ADD_ITEM,
    payload: res.data,
  });

  // And then redirect
  history.push('/items');
};

export const editItem = (id, values) => async dispatch => {
  const res = await axios.patch(`/api/items/${id}`, values);

  dispatch({
    type: EDIT_ITEM,
    payload: res.data,
  });
};

export const deleteItem = id => async dispatch => {
  const res = await axios.delete(`/api/items/${id}`);

  dispatch({
    type: DELETE_ITEM,
    payload: res.data,
  });
};

import { ADD_ITEM, FETCH_ITEMS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case FETCH_ITEMS:
      return action.payload;
    default:
      return state;
  }
}

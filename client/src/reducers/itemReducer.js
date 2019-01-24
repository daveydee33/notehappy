import { ADD_ITEM, FETCH_ITEMS, DELETE_ITEM } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case FETCH_ITEMS:
      return action.payload;
    case DELETE_ITEM:
      const removeId = action.payload._id;
      return state.filter(item => item._id !== removeId); // return state (array) with all elements except for the one we just deleted
    default:
      return state;
  }
}

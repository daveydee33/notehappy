import { ADD_ITEM } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ADD_ITEM:
      return action.payload;
    default:
      return state;
  }
}

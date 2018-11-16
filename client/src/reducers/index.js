import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authReducer from './authReducer';
import itemReducer from './itemReducer';

export default combineReducers({
  auth: authReducer,
  item: itemReducer,
  form: reduxFormReducer,
});

import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';

const rootReducer = combineReducers({
  plantsState: plantsReducer,
});

export default rootReducer;

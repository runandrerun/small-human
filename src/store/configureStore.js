import { createStore, applyMiddleware, compose } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
};

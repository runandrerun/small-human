import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist'
// import Loading from './components/loading/Loading.component';
import configureStore from './store/configureStore';
// import history from './history';

const store = configureStore();
// const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/*<PersistGate loading={<Loading />} persistor={persistor}>*/}
      <Router>
        <App />
      </Router>
    {/*</PersistGate>*/}
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

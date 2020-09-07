import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/MainComponent';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

import "materialize-css/dist/css/materialize.min.css";


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

function App(){
  return(
    <Provider store={createStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
  

}



export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Title from './components/Title';
import { titleReducer } from './reducers/titleReducer';
import './styles.css';

// Step 1: create the store
const store = createStore(titleReducer);

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

const rootElement = document.getElementById('root');

// Step 2: Provide the store
ReactDOM.render(<App />, rootElement);

import React, { useState } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';

//components
import Modal from './components/modal';
import Board from './board';
import Header from './components/header';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Provider store={store}>
    {
      modalOpen && <Modal setClose={() => setModalOpen(false)}/>
    }
    <div className="App">
      <Header task={() => setModalOpen(true)}/>
     <Board />
    </div>
    </Provider >
  );
}

export default App;

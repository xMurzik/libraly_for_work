import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":id" element={<h1>123123</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

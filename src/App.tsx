import React from 'react';
import Main from './pages/main/main';
import OneBookInfo from './pages/one-book-info/one-book-info';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":id" element={<OneBookInfo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/header/header';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path=":id" element={<h1>123123</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

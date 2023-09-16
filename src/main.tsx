import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './store/store.tsx';
import './index.css';
import { fetchBooks } from './store/books-slice/async-books.ts';

store.dispatch(fetchBooks());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

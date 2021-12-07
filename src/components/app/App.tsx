import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ListPage } from './../pages';
import Header from './../header';

import './app.css';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/list' element={<ListPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

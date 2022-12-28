import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import About from './About';

const Router: FC = () => {
  // Add Routes for different pages
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;

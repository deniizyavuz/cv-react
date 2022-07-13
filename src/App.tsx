import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomePage/HomeScreen';
import CVScreen from './Pages/CVPage/CVScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="cv" element={<CVScreen />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import PlanetCatalogList from './pages/list/planet.list';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/planet"}/>}/>
          <Route path='planet' element={<PlanetCatalogList/>}/>
          <Route path='planet/wish' element={<PlanetCatalogList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

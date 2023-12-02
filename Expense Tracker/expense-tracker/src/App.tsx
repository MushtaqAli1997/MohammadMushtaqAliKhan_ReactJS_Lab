
import './App.css';
import React from 'react';
import ShowList from './components/ShowList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<h1>Expense Tracker add Module</h1>} />
          <Route path="/" element={<ShowList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

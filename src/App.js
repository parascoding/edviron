import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

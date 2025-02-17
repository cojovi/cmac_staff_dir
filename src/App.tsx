import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeProfile from './components/EmployeeProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar';
import News from './News';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
          <Route path="/" element={<News key="Entertainment" pageSize={15} country="in" category="Entertainment" />} />
            <Route path="/Business" element={<News key="Business" pageSize={15} country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News key="Entertainment" pageSize={9} country="in" category="Entertainment" />} />
            <Route path="/General" element={<News key="General" pageSize={15} country="in" category="General" />} />
            <Route path="/Science" element={<News key="Science" pageSize={15} country="in" category="Science" />} />
            <Route path="/Health" element={<News key="Health" pageSize={15} country="in" category="Health" />} />
            <Route path="/Technology" element={<News key="Technology" pageSize={15} country="in" category="Technology" />} />
            <Route path="/Sports" element={<News key="Sports" pageSize={15} country="in" category="Sports" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}


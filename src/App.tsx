import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li> 
        <li>
          <Link to="/posts">Post List</Link>
        </li>
        <li>
          <Link to="/posts/:id">Post Detail List</Link>
        </li>
        <li>
          <Link to="/posts/new">Post New</Link>
        </li>
        <li>
          <Link to="/posts/edit/:id">Post Edit</Link>
        </li>
        <li>
          <Link to="/profile">Profile Page</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<h1>home page</h1>} />
        <Route path='/posts' element={<h1>post links page</h1>} />
        <Route path='/posts/:id' element={<h1>post Detail page</h1>} />
        <Route path='/posts/new' element={<h1>post New page</h1>} />
        <Route path='/posts/edit/:id' element={<h1>post Edit page</h1>} />
        <Route path='/profile' element={<h1>Profile page</h1>} />
        <Route path="*" element={<Navigate replace to ="/" />} />
      </Routes>

    </>
  );
}

export default App;

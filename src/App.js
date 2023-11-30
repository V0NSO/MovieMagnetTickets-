import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiClipboardCheck, HiEmojiHappy, HiSearch } from 'react-icons/hi'
import { MdGroup, MdTrendingUp } from 'react-icons/md'
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Reservation from './pages/Reservation'
import Trending from './components/Trending'
import Location from './Tempat/Location'

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">The Ultimate Movie Experience</p>
      </header>
      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
      <footer>
        <NavLink to="/Location" className="iconWrapper">
          <HiEmojiHappy className="icon" />
         Recommended
        </NavLink>
        <NavLink to="/movie" className="iconWrapper">
          <HiSearch className="icon" />
          Search
        </NavLink>
        <NavLink to="/Trending" className="iconWrapper">
          <MdTrendingUp className="icon" />
          Trending
          </NavLink>
        <NavLink to="/reservation" className="iconWrapper">
            <HiClipboardCheck className='icon' />
            Reservation
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          About Me
          </NavLink>
          
          
      </footer>
    </BrowserRouter>
  )
}


export default App

import './App.scss';
import { Routes, Route } from 'react-router-dom';
// import heroes from './heroes';

import Home from '../home/Home';
import Stats from '../stats/Stats';
import Builder from '../builder/Builder';
import About from '../about/About';
import Error from '../error/Error';
import Header from '../header/Header';
import { useEffect, useState } from 'react';





function App() {

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("/api/heroes")
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/stats' element={<Stats heroes={heroes} />} />
        <Route path='/builder' element={<Builder heroes={heroes} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
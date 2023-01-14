import React, { useState, useEffect } from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { BsFillSunFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import Home from './Home';
import Quest from './Quest';
import "./App.css"

// const themeState = useState(localStorage.getItem('theme') || 'light');

function App() {
  // const [theme, setTheme] = themeState;

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`theme-${theme}`}>
      
      {theme==='light' ? <button onClick={handleThemeChange} ><BsSun/></button>:<button onClick={handleThemeChange} ><BsFillSunFill/></button> }
      

      <BrowserRouter>
        <React.Fragment>
        <Routes>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/quest' element={<Quest/>}/>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
export default App;

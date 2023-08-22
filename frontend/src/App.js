import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Saved from './pages/Saved';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect, useMemo } from 'react';
const App = () => {
  function useMediaQuery(query: string) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);
  
      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
  
    return match;
  }
  function useMediaQueries() {
    const md = useMediaQuery("(min-width: 800px)");
    const lg = useMediaQuery("(min-width: 1200px)");
  
    return { md, lg };
  }
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/saved'
            element={<Saved />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Saved from './pages/Saved';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* nav here */}
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/'
            element={<Saved />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

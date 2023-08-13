import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Saved from './pages/Saved';
import Navbar from './components/Navbar';
const App = () => {
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

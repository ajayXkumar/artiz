import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./screens/home"
import Navbar from "./screens/navbar"
function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;

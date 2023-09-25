import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./screens/home"
import Navbar from "./screens/navbar"
import Illu from "./screens/illu"
function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/illu" element={<Illu/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;

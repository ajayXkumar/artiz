import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./screens/home"
import Navbar from "./screens/navbar"
import Illu from "./screens/illu"
import Draw from "./screens/drawing"
function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/illu" element={<Illu/>}></Route>
        <Route path="/drawing" element={<Draw/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;

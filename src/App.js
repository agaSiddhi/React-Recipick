import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<><Navbar/><Home/><Footer /></>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<><About/><Footer /></>} />
          <Route path="/contact" element={<><Contact/><Footer /></>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

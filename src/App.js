import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

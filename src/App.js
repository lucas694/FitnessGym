import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About/About";
import Trainers from "./Components/Trainers/Trainers";
import Class from "./Components/Class/Class";
import HeaderMobile from "./Components/HeaderMobile";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderMobile/>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path={"/About"} element={<About/>}/>
          <Route path={"/Class"} element={<Class/>}/>
          <Route path={"/Trainers"} element={<Trainers/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

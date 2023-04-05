import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About/About";
import Trainers from "./Components/Trainers/Trainers";
import Class from "./Components/Class/Class";
import HeaderMobile from "./Components/HeaderMobile";
import Blog from "./Components/Blog/Blog";

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
          <Route path={"/Blog"} element={<Blog/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

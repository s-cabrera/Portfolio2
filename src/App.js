//Imports
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";



function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/">
          <AboutMe />
        </Route>
        
        <Route exact path="/contact">
          <Contact/>
        </Route>
        
        <Route exact path="/projects">
          <Portfolio/>
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

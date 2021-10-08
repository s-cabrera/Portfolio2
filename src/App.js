import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Contact/>
      <Portfolio/>
      <Footer />
    </div>
  );
}

export default App;

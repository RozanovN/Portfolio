import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Welcome from "./components/welcomeMessage/Welcome";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main">
        <Welcome/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

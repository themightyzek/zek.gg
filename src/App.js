import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { unstable_batchedUpdates } from "react-dom";
import { ReactComponent as MainLogo } from "./logo/logo.min.svg";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1 style={{}}>ZEK.GG</h1>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main className="main">
        <div className="mainLeft">
          <MainLogo className="mainLogo" />
        </div>
        <div className="mainRight">
          {mainLink("/about", "PROJECTS")}
          {mainLink("/about", "TIMELINE")}
          {mainLink("/about", "CONTACT")}
        </div>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>about this website</h2>
        <p>this is a portfolio</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function mainLink(to, text) {
  return (
    <>
      <div className="linkContainer">
        <Link className="mainLink" to={to}>
          {text}
        </Link>
      </div>
    </>
  );
}

export default App;

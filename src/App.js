import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { unstable_batchedUpdates } from "react-dom";
import { ReactComponent as MainLogo } from "./logo/logo.min.svg";

function App() {
  return (
    <div className="App">
      <h1 style={{ margin: 0 }}>zek.gg</h1>
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
      <main>
        <div className="main">
          <div className="mainLeft">
            <MainLogo className="mainLogo"/>
          </div>
          <div className="mainRight">
            <Link className="Link" to="/about">PROJECTS</Link>
          </div>
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

export default App;

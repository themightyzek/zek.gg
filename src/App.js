import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { unstable_batchedUpdates } from "react-dom";
import { ReactComponent as MainLogo } from "./logo/logo.min.svg";
import projectImage from "./images/li-zhang-8atj_eBENI8-unsplash.jpg";
import OpenInNew from "@mui/icons-material/OpenInNewOutlined"

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1 style={{}}>ZEK.GG</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="Home">
        <div className="mainLeft">
          <MainLogo className="mainLogo" />
        </div>
        <div className="mainRight">
          {mainLink("/about", "PROJECTS")}
          {mainLink("/about", "TIMELINE")}
          {mainLink("/about", "CONTACT")}
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <main className="main">
        <div className="ProjectList">
          <a
            className="ProjectCard"
            href="https://github.com/themightyzek/scammus"
            target="_blank"
            rel="noreferrer"
          >
            <img src={projectImage} alt="has nothing to do with the project" />
            <div className="Right">
              <h1>Scammus</h1>
              <p>
                Twitch chat bot to act as a prediction platform. Lorem ipsum
                dolor sit amet, lorem imsum. Loerntia salvatica eher sintra ran
                do litiront, eve candirad hambug.
              </p>
              <div className="IconBar">
                <OpenInNew/>
              </div>
            </div>
          </a>
        </div>
      </main>
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

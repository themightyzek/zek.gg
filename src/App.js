import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { unstable_batchedUpdates } from "react-dom";
import { ReactComponent as MainLogo } from "./logo/logo.min.svg";
import scammusImage from "./images/li-zhang-8atj_eBENI8-unsplash.jpg";
import sweepImage from "./images/sweep_3.png";
import OpenInNew from "@mui/icons-material/OpenInNewOutlined"

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Link to={"/"} className="UnformattedLink">
          <h1>ZEK.GG [work in progress]</h1>
        </Link>
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
            <img src={scammusImage} alt="has nothing to do with the project" />
            <div className="Right">
              <h1>Scammus</h1>
              <p>
                Twitch chat bot written in C# using .NET Core 5. 
                Facilitates gambling of fake points, with moderators using chat commands
                to manage predictions.
              </p>
              <div className="IconBar">
                <OpenInNew/>
              </div>
            </div>
          </a>

          <a
            className="ProjectCard"
            href="https://drive.google.com/drive/folders/1AZ36po58uy67y8-aqe3WVNhobgWmlGKc?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sweepImage} alt="three phone screens showing different views of a finance app" />
            <div className="Right">
              <h1>Sweep</h1>
              <p>
                UI Study on a fictional personal finance tracking app. 
                Prototype built in Axure RP 9, using Material design components and guidelines.
                Features user stories, a design draft, performance analysis, and 
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

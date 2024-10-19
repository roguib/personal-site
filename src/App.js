import "./App.css";
import Editor from "./components/editor";
import JobHistory from './components/JobHistory/JobHistory';
import PersonalDescription from './components/PersonalDescription/PersonalDescription';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="web-content">
      <Header />
      <div className="section xl-flex">
        <div className="col">
          <Profile />
          <PersonalDescription />
        </div>
        <div className="col">
          <Editor />
        </div>
      </div>
      <JobHistory />
      {/* <div className="flex-title-container">
        <div className="col">
          <div className="title">
            <div className="flex-external-icons-container">
              <a
                className="external-icon"
                href="https://github.com/roguib"
                target="_blank"
                alt="Link to my personal account in Github"
              >
                <img src="./assets/github.svg" alt="Github link logo" />
              </a>

              <a
                className="external-icon"
                href="https://ghost.org/"
                target="_blank"
                alt="Link to my personal blog"
                style={{ display: 'none' }}
              >
                <img src="./assets/ghost.ico" alt="Ghost link logo" />
              </a>

              <a
                className="external-icon"
                href="https://www.linkedin.com/in/roger-guasch-ibarra-823457230/"
                target="_blank"
                alt="Link to my Linkedin profile"
              >
                <img src="./assets/linkedin.svg" alt="Linkedin link logo" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <Projects />
    </div>
  );
}

export default App;
